import logo from '/logo.png';
import { Button, Breadcrumbs, BreadcrumbItem } from '@igds/react';
import './App.css'

function App() {

  return (
    <section className="container">
      <div>
        <a href="https://igds-storybook.globalbit.dev/main/react/" target="_blank">
          <img src={logo} className="logo" alt="IGDS logo" />
        </a>
      </div>
      <h1>IGDS packages test</h1>
      
      <Button>כפתור בדיקה</Button>

      <section dir="rtl" style={{margin: '2rem 0 0'}}>
        <Breadcrumbs label="Default Breadcrumbs">
          <BreadcrumbItem href="/">
            דף הבית
          </BreadcrumbItem>
          <BreadcrumbItem href="/services">
            שירותים ומדורים
          </BreadcrumbItem>
          <BreadcrumbItem href="/services/health">
            בריאות הציבור
          </BreadcrumbItem>
          <BreadcrumbItem href="/services/health/travel">
            נסיעות לחו"ל
          </BreadcrumbItem>
          <BreadcrumbItem href="/services/health/travel/requirements">
            דרישות בריאותיות
          </BreadcrumbItem>
          <BreadcrumbItem href="/services/health/travel/requirements/visa">
            אישורי כניסה למדינות
          </BreadcrumbItem>
          <BreadcrumbItem href="/services/health/travel/requirements/visa/asia">
            מדינות אסיה
          </BreadcrumbItem>
          <BreadcrumbItem href="/services/health/travel/requirements/visa/asia/thailand">
            תאילנד
          </BreadcrumbItem>
          <BreadcrumbItem href="/services/health/travel/requirements/visa/asia/thailand/vaccination">
            חיסונים נדרשים
          </BreadcrumbItem>
          <BreadcrumbItem href="/services/health/travel/requirements/visa/asia/thailand/vaccination/certificate">
            תעודת חיסונים בינלאומית
          </BreadcrumbItem>
          <BreadcrumbItem href="/services/health/travel/requirements/visa/asia/thailand/vaccination/certificate/apply">
            הגשת בקשה
          </BreadcrumbItem>
          <BreadcrumbItem href="/services/health/travel/requirements/visa/asia/thailand/vaccination/certificate/apply/status">
            מעקב אחר בקשה
          </BreadcrumbItem>
        </Breadcrumbs>
      </section>

    </section>
  )
}

export default App
