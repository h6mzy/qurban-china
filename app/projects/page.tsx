import ProjectsGrid from '@/components/ProjectsGrid'
import { categories } from '@/lib/categories'
import { projects } from '@/lib/projects'
import CategoryFilter from '@/components/CategoryFilter'

export default async function ProjectsPage({ 
  params
}: { 
  params: Promise<{ category?: string }>
}) {
  const { category = '' } = await params
  const selectedCategory = category || ''

  const searchTerm = selectedCategory.toLowerCase()
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.categories.includes(searchTerm))
    : projects

  const categoryLabel =
    categories.find((c) => c.id === selectedCategory)?.label ?? ''

  return (
    <main>
      <section>
        <div className="container pad">
          <h1>{categoryLabel} Projects</h1>
          <p className="textWeak">{filteredProjects.length} found.</p>

          <CategoryFilter value={selectedCategory} />

          <ProjectsGrid categories={selectedCategory ? [selectedCategory] : []} />
        </div>
      </section>
    </main>
  )
}