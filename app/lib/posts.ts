export type Post = { slug: string; title: string; excerpt: string; content: string };

export const posts: Post[] = [
  {
    slug: "nextjs-nima",
    title: "Next.js nima?",
    excerpt: "React asosidagi full-stack framework haqida qisqacha.",
    content:
      "Next.js — React ilovalarini server tomonda render qilish, routing va optimizatsiya imkonini beruvchi framework.",
  },
  {
    slug: "dynamic-route",
    title: "Dynamic Route nima?",
    excerpt: "[slug] papkasi orqali dinamik sahifalar yaratish.",
    content:
      "Papka nomini [slug] shaklida yozsangiz, URL dagi qiymat params orqali sahifaga uzatiladi.",
  },
  {
    slug: "tailwind-css",
    title: "Tailwind CSS",
    excerpt: "Utility-class asosidagi CSS framework.",
    content:
      "Tailwind yordamida stillarni to'g'ridan-to'g'ri className ichida yozasiz, alohida CSS fayl shart emas.",
  },
];
