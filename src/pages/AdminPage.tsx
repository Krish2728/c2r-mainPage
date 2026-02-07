import { useState, useEffect, useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Video, Plus, Pencil, Trash2, LogOut, Loader2 } from 'lucide-react';
import type { ResourceVideo } from '@/hooks/useQueries';
import { getYouTubeVideoId, getYouTubeThumbnailUrlSafe, getYouTubeThumbnailUrl, isValidYouTubeId } from '@/lib/youtube';

const ADMIN_TOKEN_KEY = 'c2r_admin_token';
const API_BASE = ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) || '').trim().replace(/\/$/, '');

function getAuthHeaders(): HeadersInit {
  const token = localStorage.getItem(ADMIN_TOKEN_KEY);
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export default function AdminPage() {
  const queryClient = useQueryClient();
  const [token, setTokenState] = useState<string | null>(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [videos, setVideos] = useState<ResourceVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<ResourceVideo | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formTopic, setFormTopic] = useState('Career Development');
  const [formVideoId, setFormVideoId] = useState('');
  const [formSortOrder, setFormSortOrder] = useState(0);
  const [saveLoading, setSaveLoading] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const setToken = useCallback((t: string | null) => {
    if (t) localStorage.setItem(ADMIN_TOKEN_KEY, t);
    else localStorage.removeItem(ADMIN_TOKEN_KEY);
    setTokenState(t);
  }, []);

  useEffect(() => {
    setTokenState(localStorage.getItem(ADMIN_TOKEN_KEY));
  }, []);

  const fetchVideos = useCallback(async () => {
    if (!API_BASE || !token) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/admin/resource-videos`, {
        headers: getAuthHeaders(),
      });
      if (res.status === 401) {
        setToken(null);
        return;
      }
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setVideos(Array.isArray(data) ? data : []);
    } catch {
      setVideos([]);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) fetchVideos();
  }, [token, fetchVideos]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    if (!API_BASE) {
      setLoginError('API URL not configured (VITE_API_URL)');
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setLoginError(data.message || 'Login failed');
        return;
      }
      if (data.token) {
        setToken(data.token);
        setLoginEmail('');
        setLoginPassword('');
      }
    } catch {
      setLoginError('Network error');
    }
  };

  const openAdd = () => {
    setEditingVideo(null);
    setFormTitle('');
    setFormDescription('');
    setFormTopic('Career Development');
    setFormVideoId('');
    setFormSortOrder(videos.length);
    setDialogOpen(true);
  };

  const openEdit = (v: ResourceVideo) => {
    setEditingVideo(v);
    setFormTitle(v.title);
    setFormDescription(v.description || '');
    setFormTopic(v.topic || 'Career Development');
    setFormVideoId(v.video_id);
    setFormSortOrder(v.sort_order ?? 0);
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!formTitle.trim() || !formVideoId.trim()) return;
    setSaveLoading(true);
    try {
      const body = {
        title: formTitle.trim(),
        description: formDescription.trim(),
        topic: formTopic.trim() || 'Career Development',
        video_id: formVideoId.trim(),
        sort_order: formSortOrder,
      };
      if (editingVideo) {
        const res = await fetch(`${API_BASE}/api/admin/resource-videos/${editingVideo.id}`, {
          method: 'PUT',
          headers: getAuthHeaders(),
          body: JSON.stringify(body),
        });
        if (res.status === 401) setToken(null);
        if (!res.ok) throw new Error('Update failed');
      } else {
        const res = await fetch(`${API_BASE}/api/admin/resource-videos`, {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify(body),
        });
        if (res.status === 401) setToken(null);
        if (!res.ok) throw new Error('Create failed');
      }
      setDialogOpen(false);
      await fetchVideos();
      queryClient.invalidateQueries({ queryKey: ['resourceVideos'] });
    } catch {
      setSaveLoading(false);
    } finally {
      setSaveLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Remove this video from the Resources page?')) return;
    setDeleteId(id);
    try {
      const res = await fetch(`${API_BASE}/api/admin/resource-videos/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (res.status === 401) setToken(null);
      if (!res.ok) throw new Error('Delete failed');
      await fetchVideos();
      queryClient.invalidateQueries({ queryKey: ['resourceVideos'] });
    } finally {
      setDeleteId(null);
    }
  };

  if (!API_BASE) {
    return (
      <div className="container py-16">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Admin</CardTitle>
            <CardDescription>Set VITE_API_URL in your environment to use the admin panel.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="flex flex-col">
        <section className="bg-gradient-to-br from-c2r-primary to-c2r-secondary py-16 text-white">
          <div className="container">
            <h1 className="text-3xl font-bold">Admin Login</h1>
            <p className="text-white/90 mt-1">Sign in to manage resource videos</p>
          </div>
        </section>
        <section className="container py-12 max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>Use your admin email and password</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
                {loginError && (
                  <p className="text-sm text-destructive">{loginError}</p>
                )}
                <Button type="submit" className="w-full">Sign in</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <section className="border-b bg-muted/30 py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="h-6 w-6 text-c2r-primary" />
            <h1 className="text-xl font-bold">Admin – Resource Videos</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setToken(null)}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </Button>
        </div>
      </section>

      <section className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            These videos appear in the Resources page under the Videos tab. Add or edit YouTube video IDs (e.g. from Connect2Roots Academy).
          </p>
          <Button onClick={openAdd}>
            <Plus className="mr-2 h-4 w-4" />
            Add video
          </Button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : videos.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              No videos yet. Add one to show on the Resources page.
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <Card key={v.id} className="overflow-hidden">
                <div className="aspect-video w-full bg-muted relative">
                  {v.video_id && isValidYouTubeId(getYouTubeVideoId(v.video_id)) ? (
                    <img
                      src={getYouTubeThumbnailUrlSafe(v.video_id)}
                      alt={v.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const t = e.currentTarget;
                        if (t.dataset.fallback === '1') return;
                        t.dataset.fallback = '1';
                        t.src = getYouTubeThumbnailUrl(v.video_id, 'hqdefault');
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      No thumbnail
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base line-clamp-2">{v.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{v.description || '—'}</CardDescription>
                  <span className="text-xs text-muted-foreground">{v.topic} · Order: {v.sort_order}</span>
                </CardHeader>
                <CardContent className="flex gap-2 pt-0">
                  <Button variant="outline" size="sm" onClick={() => openEdit(v)}>
                    <Pencil className="mr-1 h-3 w-3" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(v.id)}
                    disabled={deleteId === v.id}
                  >
                    {deleteId === v.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <Trash2 className="mr-1 h-3 w-3" />}
                    Delete
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingVideo ? 'Edit video' : 'Add video'}</DialogTitle>
            <DialogDescription>
              YouTube video ID is the part after <code className="text-xs bg-muted px-1 rounded">watch?v=</code> in the URL.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="form-title">Title</Label>
              <Input
                id="form-title"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                placeholder="e.g. Career Guidance & Mentorship"
              />
            </div>
            <div>
              <Label htmlFor="form-description">Description</Label>
              <Input
                id="form-description"
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                placeholder="Short description for the card"
              />
            </div>
            <div>
              <Label htmlFor="form-topic">Topic</Label>
              <Input
                id="form-topic"
                value={formTopic}
                onChange={(e) => setFormTopic(e.target.value)}
                placeholder="e.g. Career Development"
              />
            </div>
            <div>
              <Label htmlFor="form-videoId">YouTube Video ID</Label>
              <Input
                id="form-videoId"
                value={formVideoId}
                onChange={(e) => setFormVideoId(e.target.value)}
                placeholder="e.g. dQw4w9WgXcQ"
              />
            </div>
            <div>
              <Label htmlFor="form-sortOrder">Sort order</Label>
              <Input
                id="form-sortOrder"
                type="number"
                value={formSortOrder}
                onChange={(e) => setFormSortOrder(Number(e.target.value) || 0)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={!formTitle.trim() || !formVideoId.trim() || saveLoading}>
              {saveLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {editingVideo ? 'Save changes' : 'Add video'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
