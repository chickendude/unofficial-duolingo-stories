import React, { cache, Suspense } from "react";
import { notFound } from "next/navigation";
import { sql } from "lib/db";

import CourseTitle from "./course_title";
import SetList from "./set_list";
import get_localisation from "../../../../lib/get_localisation";
import Legal from "../../../../components/layout/legal";

const get_course = cache(async (course_id) => {
  return (
    (
      await sql`
        SELECT l.name AS learning_language_name, course.from_language FROM course
        JOIN language l on l.id = course.learning_language
        WHERE course.short = ${course_id} AND course.public LIMIT 1
        `
    )[0] || null
  );
});

export async function generateMetadata({ params, searchParams }, parent) {
  if (
    params.course_id.indexOf("-") === -1 ||
    params.course_id.indexOf(".") !== -1
  ) {
    return notFound();
  }
  const course = await get_course(params.course_id);

  if (!course) notFound();
  const localization = await get_localisation(course.from_language);

  const meta = await parent;

  return {
    title:
      localization("meta_course_title", {
        $language: course.learning_language_name,
      }) || `${course.learning_language_name} Duolingo Stories`,
    description:
      localization("meta_course_description", {
        $language: course.learning_language_name,
      }) ||
      `Improve your ${course.learning_language_name} learning by community-translated Duolingo stories.`,
    alternates: {
      canonical: `https://duostories.org/${params.course_id}`,
    },
    keywords: [course.learning_language_name, ...meta.keywords],
  };
}

export async function generateStaticParams() {
  const courses = await sql`SELECT short FROM course WHERE course.public`;

  return courses.map((course) => ({
    course_id: course.short,
  }));
}

export default async function Page({ params }) {
  if (
    params.course_id.indexOf("-") === -1 ||
    params.course_id.indexOf(".") !== -1
  ) {
    return notFound();
  }

  return (
    <>
      <Suspense fallback={<CourseTitle />}>
        <CourseTitle course_id={params.course_id} />
      </Suspense>

      <Suspense fallback={<SetList />}>
        <SetList course_id={params.course_id} />
      </Suspense>
      <hr />
      <Legal language_name={undefined} />
    </>
  );
}