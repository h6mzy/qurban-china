'use client'

import { DownOutline } from 'antd-mobile-icons'
import { testimonials } from '../_lib/testimonials'
import Title from '../components/title'
import styles from './testimonials.module.sass'
import { ActionSheet, Tabs } from 'antd-mobile'
import { useState } from 'react'

export default function Testimonials() {

  const years = ['2015', '2016', '2017', '2018', '2019', '2020']
  const [tab, setTab] = useState(years[0])
  const [visible, setVisible] = useState(false)
  
  return (
    <main>
      <section className='container'>
        <div className='pad'>
          <Title title='Testimonials' style={{ margin: '0 0 var(--adm-gap)' }} />
          <div className={styles.header}>
            <Tabs
              className={styles.tabs}
              activeKey={tab}
              onChange={(key) => setTab(key)}
            >
              {years.map(year =>
                <Tabs.Tab title={year} key={year} />
              )}
            </Tabs>
            <a onClick={() => setVisible(true)}>
              <DownOutline className={styles.more} />
            </a>
          </div>
          <ActionSheet
            visible={visible}
            actions={years.map(y => ({ text: `${y}`, key: y }))}
            onClose={() => setVisible(false)}
            closeOnAction
            onAction={action => setTab(String(action.key))}
          />
        </div>
      </section>
    </main>
  )
}