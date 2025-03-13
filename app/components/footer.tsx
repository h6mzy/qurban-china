'use client'

import dayjs from 'dayjs'
import { project_details } from '../_lib/project'

const SiteFooter = () => {
  return (
    <div className='pad-x'>
      <span>&copy; {dayjs().format('YYYY')} {project_details.title}</span>
    </div>
  )
}

export default SiteFooter