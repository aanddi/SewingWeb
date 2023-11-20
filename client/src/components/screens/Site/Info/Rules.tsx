import { FC } from 'react'

import RulesVacancy from '@/components/elements/RulesSite/RulesVacancy'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

const Rules: FC = () => {
  return (
    <SiteLayout>
      <div className="rules">
        <div className="rules__container">
          <div className="rules__bigTitle">Правила сайта SewingWeb.ru</div>
          <div className="rules__wrapper">
            <RulesVacancy />
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default Rules
