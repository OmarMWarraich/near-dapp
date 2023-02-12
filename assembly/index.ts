import { PersistentUnorderedMap } from "near-sdk-as";

export const courses = new PersistentUnorderedMap<string, string>("Courses");

export function addCourse(id: string, name: string): void {

  courses.set(id, name);

}

export function getCourse(id: string): string | null {

  return courses.get(id);

}
