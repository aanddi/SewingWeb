import { FC } from 'react'

import { AiOutlineClose } from 'react-icons/ai'
import { FiInfo } from 'react-icons/fi'

const RulesVacancy: FC = () => {
  return (
    <div className="vacancyRules">
      <div className="rules__title">Правила и условия размещения вакансии</div>
      <h3 className="rules__subTitle">Общие положения</h3>
      <ol>
        <li>
          При размещении вакансии на платной платформе или ресурсе, могут действовать условия оплаты и сроки размещения, которые необходимо соблюдать.
        </li>
        <li>Работодателю предоставляется 1 активная бесплатная вакансию на публикацию</li>
        <li>Вакансия должна являться предложением работы и содержать достоверную информацию только об одной предлагаемой работодателем позиции. </li>
        <li>Вакансии могут быть размещены прямым работодателем или кадровым агентством.</li>
        <p> Прямому работодателю запрещается размещать вакансии сторонних компаний.</p>
        <p>
          Действия физических лиц в личном кабинете Компании признаются действиями Компании, совершенными уполномоченными лицами в интересах Компании.
          Администрация сервиса вправе предложить Компании и/или ее представителям предоставить подтверждение полномочий.
        </p>
        <li>Размещать копии одной и той же вакансии запрещено. </li>
        <li>
          Размещать обычные вакансии под видом стажировок запрещено. Под стажировкой понимается полноценная программа подготовки специалистов,
          подразумевающая обучение по основной специальности или повышение их квалификации.
        </li>
        <li>
          Все вакансии, размещаемые в Базе данных, в том числе с возможностью визуализации на страницах Сайта, проходят проверку службой модерации.
          Вакансии, не соответствующие настоящим Правилам, могут быть отредактированы или заблокированы с уведомлением Компании по электронной почте.
        </li>
        <li>
          Размещая в карточке Компании свое обозначение (логотип, бренд и т.п.), Компания соглашается с тем, что логотип Компании входит в состав
          информации о Компании и может визуализироваться на страницах Сайта совместно со сведениями о вакансиях Компании. Компания также соглашается
          на передачу Администрацией сервиса логотипа Компании третьим лицам в составе сведений о вакансии при размещении информации о вакансиях
          Компании на сайтах-агрегаторах и сайтах-партнерах, а также на использование логотипа Компании при рекламе Сервиса.{' '}
        </li>
      </ol>

      <h3 className="rules__subTitle">Заполнение вакансии</h3>
      <ol>
        <li>
          Все поля в вакансии должны быть заполнены на русском языке в соответствии с правилами русского языка. Допускается размещение вакансии на
          английском языке.
        </li>
        <li>
          Название вакансии может содержать:
          <ul>
            <li>
              название должности в единственном числе, именительном падеже. Не допускается перечисление нескольких должностей в одной вакансии.
              Название вакансии должно начинаться с заглавной буквы, но не может быть написано заглавными буквами полностью.
            </li>
          </ul>
        </li>
        <li>
          В названии вакансии допускается не более одного уточнения:
          <ul>
            <li> уточнение специализации (например, «Инженер-проектировщик (водоснабжение и канализация)»);</li>
            <li>существенных условий работы (например, «Официант в ночь»);</li>
            <li>уточнение бренда или объекта для ориентира (например, «Официант в ресторан Тарас Бульба» или «Продавец в ТЦ Европейский»).</li>
          </ul>
        </li>
        <li>Название вакансии не должно быть длиннее 100 символов, включая пробелы.</li>
        <li>
          Название вакансии / должности должны соответствовать описанию вакансии. В противном случае модераторы вправе изменить название вакансии /
          должности в соответствии с описанием вакансии.
        </li>
        <li>
          Для указания адреса работы, города и другой информации нужно использовать отдельные поля вакансии. При этом в названии вакансии можно
          указать одну станцию метро.
        </li>
        <li>В размещаемой вакансии можно указать только один адрес работы.</li>
        <li> Вакансия размещается строго в профессиональных сферах, соответствующих функциональным обязанностям работника.</li>
        <li>
          Уровень зарплаты указывается за 1 месяц работы или за одну вахту; при невозможности по каким-либо причинам указать его, допустимо выбрать
          вариант «по договоренности» и рассказать о методе расчета зарплаты в разделе «Описание вакансии».
        </li>
        <li>
          Информация в поле «Описание вакансии» должна быть четко структурирована и включать в себя: профессиональные требования к соискателю,
          должностные обязанности сотрудника и условия работы (неструктурированные вакансии редактируются службой модерации, недостаточно
          информативные блокируются)
        </li>
        <li>
          Указывать описание компании в поле «Описание вакансии» для прямых работодателей запрещается (для этого предусмотрен раздел «Моя компания»).
          Для кадровых агентств допускается краткое описание компании, куда будет трудоустроен соискатель, а именно: сферы деятельности, отраслевой
          принадлежности, размера, а также положения компании на рынке.
        </li>
        <li>
          В тексте вакансии запрещается:
          <ul>
            <li>указывать несходные должности в поле «Название вакансии»;</li>
            <li>копировать один и тот же текст в разных полях Вакансии;</li>
            <li>
              использовать ненормативную лексику, жаргонизмы, грубые и бранные слова, большое количество специальных символов, хештегов, translit'а и
              CAPS LOCK'а;
            </li>
            <li>размещать ссылки на сторонние ресурсы, обозначения (бренды, логотипы, товарные знаки и т.п.) не принадлежащие Компании;</li>
            <li>указывать в вакансии населенные пункты, отличные от места работы по данной вакансии;</li>
            <li>
              размещать информацию, которая противоречит законодательству; содержит прямую и скрытую рекламу товаров и услуг в том числе, но не
              ограничиваясь предложения по написанию дипломных, курсовых, контрольных и т.п. работ, объявления брачных агентств и сайтов знакомств;
            </li>
            <li>
              связана с религиозными сектами, оккультными услугами; подразумевает оказание интимных услуг или услуг сексуального характера; связана с
              финансовыми пирамидами, сетевым маркетингом и другими сомнительными способами заработка; предлагает работу или обучение, требующие
              внесения денежных средств; предлагает предварительную отправку копий документов, удостоверяющих личность (паспорт, водительские права и
              пр.) для записи на собеседование; предлагают отправку SMS на короткие номера или звонок на платную телефонную линию;
            </li>
            <li>указывать на требование о наличии у соискателя документов, прямо не предусмотренных Трудовым кодексом.</li>
          </ul>
        </li>
        <li>
          В соответствии с пунктом 6 статьи 25 Закона Российской Федерации от 19.04.1991 г. № 1032-1 «О занятости населения в Российской Федерации»,
          запрещается размещение на страницах Сайта в составе сведений о вакансии информации о свободных рабочих местах или вакантных должностях,
          содержащей сведения о каком бы то ни было прямом или косвенном ограничении прав или об установлении прямых или косвенных преимуществ в
          зависимости от пола, расы, цвета кожи, национальности, языка, происхождения, имущественного, семейного, социального и должностного
          положения, возраста, места жительства, отношения к религии, убеждений, принадлежности или непринадлежности к общественным объединениям или
          каким-либо социальным группам, а также других обстоятельств, не связанных с деловыми качествами работников*, за исключением случаев, в
          которых право или обязанность устанавливать такие ограничения или преимущества предусмотрены федеральными законами Российской Федерации
          (информации о свободных рабочих местах или вакантных должностях, содержащей ограничения дискриминационного характера).
        </li>
      </ol>
      <div className="vacancyRules__footer">
        <FiInfo size={30} style={{ color: '#3490DF' }} />
        <p>
          В случае нарушения правил и условий размещения вакансии на платформе sewingweb.ru администрация имеет полное право удалить вашу вакансию
        </p>
      </div>
    </div>
  )
}

export default RulesVacancy