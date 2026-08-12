import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        date: z.date(),
        readingTime: z.string().optional(),
        cover: z.string().optional(),
    }),
});

const pesquisa = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/pesquisa' }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        order: z.number(),
        icon: z.string(),
        cover: z.string().optional(),
    }),
});

const projetos = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        year: z.string(),
        status: z.string(),
        location: z.string().optional(),
        externalUrl: z.string().optional(),
        cover: z.string().optional(),
    }),
});

const publicacoes = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/publicacoes' }),
    schema: z.object({
        title: z.string(),
        authors: z.string(),
        year: z.number(),
        venue: z.string(),
        category: z.enum(['Artigo', 'Livro', 'Capítulo', 'Patente', 'Editorial']),
        doi: z.string().optional(),
        pdfUrl: z.string().optional(),
        lines: z.array(z.string()).optional(),
    }),
});

export const collections = { blog, pesquisa, projetos, publicacoes };
