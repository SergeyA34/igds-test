import logo from '/logo.png';
import './App.css'
import {Button} from '@igds/react/button';
import {Breadcrumbs, BreadcrumbItem} from '@igds/react/breadcrumbs';

function App() {
  const handleNavigate = (e: CustomEvent<{value: string}>) => {
    console.log('navigate', e.detail.value);
  }

  return (
    <><section className="container">
      <div>
        <a href="https://igds-storybook.globalbit.dev/main/react/" target="_blank">
          <img src={logo} className="logo" alt="IGDS logo" />
        </a>
      </div>
      <h1>IGDS packages test</h1>
      <Button>Click me</Button>
    </section><Breadcrumbs label="Default Breadcrumbs" preventDefault>
        <BreadcrumbItem
          href="/"
          onIgdsNavigate={handleNavigate}
        >
          דף הבית
        </BreadcrumbItem>
        <BreadcrumbItem
          href="/services"
          onIgdsNavigate={handleNavigate}
        >
          שירותים ומדורים
        </BreadcrumbItem>
        <BreadcrumbItem
          href="/services/health"
          onIgdsNavigate={handleNavigate}
        >
          בריאות הציבור
        </BreadcrumbItem>
        <BreadcrumbItem
          href="/services/health/travel"
          onIgdsNavigate={handleNavigate}
        >
          נסיעות לחו"ל
        </BreadcrumbItem>
        <BreadcrumbItem
          href="/services/health/travel/requirements"
          onIgdsNavigate={handleNavigate}
        >
          דרישות בריאותיות
        </BreadcrumbItem>
        <BreadcrumbItem
          href="/services/health/travel/requirements/visa"
          onIgdsNavigate={handleNavigate}
        >
          אישורי כניסה למדינות
        </BreadcrumbItem>
        <BreadcrumbItem
          href="/services/health/travel/requirements/visa/asia"
          onIgdsNavigate={handleNavigate}
        >
          מדינות אסיה
        </BreadcrumbItem>
        <BreadcrumbItem
          href="/services/health/travel/requirements/visa/asia/thailand"
          onIgdsNavigate={handleNavigate}
        >
          תאילנד
        </BreadcrumbItem>
        <BreadcrumbItem
          href="/services/health/travel/requirements/visa/asia/thailand/vaccination"
          onIgdsNavigate={handleNavigate}
        >
          חיסונים נדרשים
        </BreadcrumbItem>
        <BreadcrumbItem
          href="/services/health/travel/requirements/visa/asia/thailand/vaccination/certificate"
          onIgdsNavigate={handleNavigate}
        >
          תעודת חיסונים בינלאומית
        </BreadcrumbItem>
        <BreadcrumbItem
          href="/services/health/travel/requirements/visa/asia/thailand/vaccination/certificate/apply"
          onIgdsNavigate={handleNavigate}
        >
          הגשת בקשה
        </BreadcrumbItem>
        <BreadcrumbItem
          href="/services/health/travel/requirements/visa/asia/thailand/vaccination/certificate/apply/status"
          onIgdsNavigate={handleNavigate}
        >
          מעקב אחר בקשה
        </BreadcrumbItem>
      </Breadcrumbs></>
  )
}

export default App
