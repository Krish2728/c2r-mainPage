import { ScrollReveal } from "@/components/ScrollReveal";
import type { RoleCategoryGroup } from "@/data/mentorRoles";

function RoleColumn({ role }: { role: RoleCategoryGroup["roles"][0] }) {
  return (
    <div className="flex flex-col h-full p-5 md:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-c2r-accent mb-2">
        {role.roleCode}
      </p>
      <h4 className="font-serif text-xl md:text-2xl font-bold text-c2r-primary mb-3 leading-snug">
        {role.title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {role.description}
      </p>
      <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-c2r-primary" />
        <span>{role.audience}</span>
      </p>
    </div>
  );
}

export function RoleCategories({
  categories,
}: {
  categories: RoleCategoryGroup[];
}) {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {categories.map((group, groupIndex) => (
        <ScrollReveal
          key={group.category}
          delay={80 + groupIndex * 60}
          direction="up"
        >
          <article className="rounded-2xl border border-border/70 bg-[#F7F5F2] shadow-sm overflow-hidden">
            <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 border-b border-border/50 bg-white/40">
              <span className="inline-flex rounded-full border border-border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
                {group.category}
              </span>
              <span className="text-xs text-muted-foreground shrink-0">
                {group.roles.length}{" "}
                {group.roles.length === 1 ? "role" : "roles"}
              </span>
            </div>

            <div
              className={`grid ${
                group.roles.length > 1
                  ? "grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/50"
                  : "grid-cols-1"
              }`}
            >
              {group.roles.map((role) => (
                <RoleColumn key={role.roleCode} role={role} />
              ))}
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
