import { volunteerRoleCategories } from "@/data/volunteerRoles";
import { RoleCategories } from "@/components/RoleCategories";

export function VolunteerRoleCategories() {
  return <RoleCategories categories={volunteerRoleCategories} />;
}
