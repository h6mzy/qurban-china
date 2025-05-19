'use client'

import { useState } from 'react'
import { LayoutGroup, AnimatePresence, motion } from 'motion/react'
import { projects } from '../../_lib/projects'
import Card from '@/app/components/Card'
import ExpandedCard from '@/app/components/ExpandedCard'
import layout from '@/styles/Layout.module.sass'
import flex from '@/styles/Flex.module.sass'

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <LayoutGroup>
      <section>
        <div className={layout.container}>
          <div className={layout.pad}>
            <div className={layout.autoAlign}>
              <h2><strong>Zakat Projects</strong></h2>
            </div>
            <div className={`${flex.row} ${flex.threeColumn}`}>
              {projects.map((project, index) => (
                <motion.div 
                  key={index} 
                  layoutId={project.id} 
                  onClick={() => setSelectedId(project.id)}
                >
                  <Card project={project} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for expanded card */}
      <AnimatePresence>
        {selectedId && (
          <ExpandedCard
            project={projects.find(p => p.id === selectedId)}
            index={projects.findIndex(p => p.id === selectedId)} onClose={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  )
}