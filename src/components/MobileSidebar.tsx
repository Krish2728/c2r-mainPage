import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Heart,
  LogOut,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export type MobileNavItem = {
  label: string;
  description?: string;
  path: string;
  hash?: string;
  icon: LucideIcon | IconType;
};

export type MobileNavSection = {
  id: string;
  label: string;
  icon?: LucideIcon;
  items: MobileNavItem[];
};

type MobileSidebarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  openSection: string | null;
  onOpenSectionChange: (section: string | null) => void;
  sections: MobileNavSection[];
  loginItems: MobileNavItem[];
  hasCourseAccess: boolean;
  onNavigate: (path: string, hash?: string) => void;
  onCourseLogout: () => void;
};

const ease = [0.22, 1, 0.36, 1] as const;

function NavTreeItem({
  item,
  isActive,
  onSelect,
}: {
  item: MobileNavItem;
  isActive: boolean;
  onSelect: () => void;
}) {
  const Icon = item.icon;

  const content = (
    <>
      <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
      <div className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium leading-snug">
          {item.label}
        </span>
        {item.description && (
          <span className="mt-0.5 block truncate text-xs text-muted-foreground">
            {item.description}
          </span>
        )}
      </div>
    </>
  );

  const className = cn(
    "relative flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors",
    isActive
      ? "bg-muted text-foreground"
      : "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
  );

  if (item.hash) {
    return (
      <button type="button" className={className} onClick={onSelect}>
        {content}
      </button>
    );
  }

  return (
    <Link
      to={item.path}
      className={className}
      activeProps={{ className: "bg-muted text-foreground" }}
      onClick={onSelect}
    >
      {content}
    </Link>
  );
}

function MobileNavSectionBlock({
  section,
  isOpen,
  onToggle,
  onClose,
  onNavigate,
  locationPath,
  locationHash,
}: {
  section: MobileNavSection;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onNavigate: (path: string, hash?: string) => void;
  locationPath: string;
  locationHash: string;
}) {
  const SectionIcon = section.icon;

  return (
    <div className="py-0.5">
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-sm font-medium transition-colors",
          isOpen
            ? "bg-muted/80 text-foreground"
            : "text-foreground/85 hover:bg-muted/60",
        )}
      >
        {SectionIcon && (
          <SectionIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}
        <span className="flex-1 text-left">{section.label}</span>
        <span className="rounded-md bg-background/80 px-1.5 py-0.5 text-[0.6875rem] font-medium tabular-nums text-muted-foreground ring-1 ring-border/60">
          {section.items.length}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease }}
            className="overflow-hidden"
          >
            <div className="relative ml-[1.125rem] mt-1 border-l border-border/70 pl-3">
              {section.items.map((item, index) => {
                const isActive =
                  locationPath === item.path &&
                  (!item.hash ||
                    locationHash === item.hash ||
                    locationHash === `#${item.hash}`);

                return (
                  <div
                    key={`${item.path}-${item.hash ?? item.label}`}
                    className="relative py-0.5"
                  >
                    <span
                      aria-hidden
                      className="absolute -left-3 top-[1.125rem] w-3 border-t border-border/70"
                    />
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.22, ease }}
                    >
                      <NavTreeItem
                        item={item}
                        isActive={isActive}
                        onSelect={() => {
                          if (item.hash) {
                            onNavigate(item.path, item.hash);
                          }
                          onClose();
                        }}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileSidebar({
  open,
  onOpenChange,
  openSection,
  onOpenSectionChange,
  sections,
  loginItems,
  hasCourseAccess,
  onNavigate,
  onCourseLogout,
}: MobileSidebarProps) {
  const location = useLocation();
  const locationPath = location.pathname;
  const locationHash = location.hash.replace(/^#/, "");

  const close = () => onOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild className="min-[1180px]:hidden">
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-[min(320px,88vw)] flex-col gap-0 overflow-hidden border-l border-border/60 bg-background p-0 sm:max-w-[320px] [&>button]:top-3.5 [&>button]:right-3.5 [&>button]:rounded-lg [&>button]:border [&>button]:border-border/60 [&>button]:bg-background [&>button]:opacity-100"
      >
        <div className="flex shrink-0 items-center border-b border-border/60 px-4 py-4 pr-12">
          <Link to="/" onClick={close} className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Connect2Roots Foundation"
              className="h-9 w-auto max-w-[180px] object-contain object-left"
            />
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-4 scrollbar-hide">
          <p className="mb-2 px-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Navigation
          </p>

          <nav className="space-y-0.5">
            {sections.map((section) => (
              <MobileNavSectionBlock
                key={section.id}
                section={section}
                isOpen={openSection === section.id}
                onToggle={() =>
                  onOpenSectionChange(
                    openSection === section.id ? null : section.id,
                  )
                }
                onClose={close}
                onNavigate={onNavigate}
                locationPath={locationPath}
                locationHash={locationHash}
              />
            ))}
          </nav>

          <p className="mb-2 mt-6 px-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {hasCourseAccess ? "Your account" : "Login / Sign up"}
          </p>

          <div className="space-y-0.5">
            {hasCourseAccess ? (
              <>
                <div className="rounded-xl bg-muted/50 px-3 py-2.5">
                  <p className="text-sm font-medium text-foreground">
                    Resources access
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Signed in for courses
                  </p>
                </div>
                <Link
                  to="/resources"
                  className="flex items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
                  onClick={close}
                >
                  <BookOpen className="h-4 w-4 shrink-0" />
                  Go to Resources
                </Link>
                <button
                  type="button"
                  className="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-left text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
                  onClick={onCourseLogout}
                >
                  <LogOut className="h-4 w-4 shrink-0" />
                  Log out
                </button>
              </>
            ) : (
              loginItems.map((item) => (
                <NavTreeItem
                  key={item.label}
                  item={item}
                  isActive={
                    locationPath === item.path &&
                    (!item.hash || locationHash === item.hash)
                  }
                  onSelect={() => {
                    if (item.hash) {
                      onNavigate(item.path, item.hash);
                    }
                    close();
                  }}
                />
              ))
            )}
          </div>
        </div>

        <div className="shrink-0 border-t border-border/60 p-3">
          <Button
            asChild
            className="w-full rounded-xl bg-c2r-primary text-white hover:bg-c2r-primary/90"
            onClick={close}
          >
            <Link to="/donate" className="inline-flex items-center justify-center gap-2">
              <Heart className="h-4 w-4" />
              Support the Mission
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
