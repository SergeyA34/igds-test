import {useRef} from 'react';
import logo from '/logo.png';
import './App.css'
import {Button} from '@igds/react/button';
import {Breadcrumbs, BreadcrumbItem} from '@igds/react/breadcrumbs';
import {Table, TableHeader, TableRow} from '@igds/react/table';
import {PopupMenu, PopupMenuItem} from '@igds/react/popup-menu';
import {Icon} from '@igds/react/icon';
import {Drawer, DrawerWC} from '@igds/react/drawer';

function App() {
  const drawerRef = useRef<DrawerWC>(null);

  const handleNavigate = (e: CustomEvent<{value: string}>) => {
    console.log('navigate', e.detail.value);
  }

  const openDrawer = () => {
    drawerRef.current?.show();
  };

  return (
    <>
      <section className="container">
        <div>
          <a href="https://igds-storybook.globalbit.dev/main/react/" target="_blank">
            <img src={logo} className="logo" alt="IGDS logo" />
          </a>
        </div>
        <h1>IGDS packages test</h1>
        <Button>Click me</Button>
      </section>
      <Breadcrumbs label="Default Breadcrumbs" preventDefault>
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
      </Breadcrumbs><br/>
      <Table>
        <TableHeader columns={[
          {
            id: '1',
            name: 'Name'
          },
          {
            id: '2',
            name: 'Quantity'
          },
          {
            id: '3',
            name: 'Action'
          },
          {
            id: '4',
            name: 'Measure'
          },
        ]}/>
        <TableRow cells={[
          {
            value: 'Apples'
          },
          {
            value: '12'
          },
          {
            value: ''
          },
          {
            value: 'boxes'
          },
        ]}/>
        <TableRow cells={[
          {
            value: 'Water melon'
          },
          {
            value: '300'
          },
          {
            value: ''
          },
          {
            value: 'ton'
          },
        ]}/>
        <TableRow cells={[
          {
            value: 'Orange'
          },
          {
            value: '15'
          },
          {
            value: ''
          },
          {
            value: 'ton'
          },
        ]}/>

        <PopupMenu offset={8} slot="row=0:cell=2">
          <Button
            variant="link"
            slot="trigger"
          >
            <Icon
              name="more-vertical"
              slot="icon"
            />
          </Button>
          <PopupMenuItem id="delete-row=0:cell=2">
            Delete
          </PopupMenuItem>
          <PopupMenuItem id="edit-row=0:cell=2">
            Edit
          </PopupMenuItem>
        </PopupMenu>

        <PopupMenu offset={8} slot="row=1:cell=2">
          <Button
            variant="link"
            slot="trigger"
          >
            <Icon
              name="more-vertical"
              slot="icon"
            />
          </Button>
          <PopupMenuItem id="delete-row=1:cell=2">
            Delete
          </PopupMenuItem>
          <PopupMenuItem id="edit-row=1:cell=2">
            Edit
          </PopupMenuItem>
        </PopupMenu>

        <PopupMenu offset={8} slot="row=2:cell=2">
          <Button
            variant="link"
            slot="trigger"
          >
            <Icon
              name="more-vertical"
              slot="icon"
            />
          </Button>
          <PopupMenuItem id="delete-row=2:cell=2">
            Delete
          </PopupMenuItem>
          <PopupMenuItem id="edit-row=2:cell=2">
            Edit
          </PopupMenuItem>
        </PopupMenu>
      </Table><br />
      <Button
        variant="primary"
        onClick={openDrawer}
      >
        Open Drawer
      </Button>
      <Drawer
          ref={drawerRef}
          position="right"
          label="Morbi erat ex, lacinia nec efficitur eget, sagittis"
        >
          <p>
            Lorem ipsum Quisque blandit dolor vel ullamcorper fringilla. Etiam
            ut ultricies nibh. Maecenas sit amet ipsum at felis convallis
            luctus. Praesent at urna ac massa eleifend iaculis. Donec at
            venenatis metus. Donec malesuada sapien eget neque finibus, vel
            aliquam mi lacinia. Mauris a sem elementum, pretium diam nec, luctus
            neque. Praesent lacinia imperdiet erat, eget feugiat mi feugiat ut.
            Proin iaculis, massa eu lacinia tempor, dui lacus pellentesque dui,
            ut dapibus tellus purus at augue. Nam sagittis lobortis justo vel
            porta. Proin vel vulputate quam. Vivamus at vestibulum est.
            Phasellus a arcu lacus. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Nullam elit mauris, pharetra vitae libero sit
            amet, efficitur rhoncus mauris.
          </p>
          <p>
            Nulla vel dapibus enim, vehicula vehicula mi. Integer laoreet sit
            amet ante sit amet lobortis. Suspendisse eget nisi eu lectus ornare
            lobortis. Aliquam erat volutpat. Vivamus congue massa ut leo
            consectetur, sagittis facilisis odio auctor. Sed elementum interdum
            leo. Praesent laoreet nisl non tortor aliquam commodo. Ut dignissim
            at diam ac elementum. Vestibulum pellentesque tellus metus, in
            tempus ex auctor quis.
          </p>
          <p>
            Morbi erat ex, lacinia nec efficitur eget, sagittis ut orci. Etiam
            in dolor placerat, pharetra ligula et, bibendum neque. Vestibulum
            vitae congue lectus, sed ultricies augue. Nam iaculis elit nec velit
            luctus, vitae rutrum nunc imperdiet. Nunc vel turpis sit amet lectus
            pellentesque tincidunt. Proin commodo tincidunt enim, at sodales mi
            dictum ac. Maecenas molestie, metus quis malesuada dictum, leo erat
            egestas lacus, sit amet tristique urna magna a diam. Donec ultricies
            dui sit amet mi ornare egestas. Phasellus ultricies lectus non
            interdum pellentesque. Cras nisi tellus, feugiat sed enim quis,
            tristique interdum lacus. Sed vel pharetra arcu, ac fermentum neque.
            Morbi mollis sollicitudin varius. Ut sit amet vulputate velit.
          </p>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Suspendisse luctus enim a dui rutrum luctus.
            Proin quam ante, facilisis lacinia vulputate in, efficitur eu ex.
            Sed tincidunt vehicula tortor eu dictum. Donec velit turpis, iaculis
            ut dapibus at, mattis ut sapien. Aenean vel sapien nunc. Duis
            vehicula risus eu mollis luctus. Quisque consequat nibh nec euismod
            elementum. Pellentesque ut viverra risus, sed viverra sapien. Nullam
            at purus convallis, pulvinar erat sit amet, fermentum arcu. Aliquam
            non orci condimentum, dictum purus sed, tincidunt nunc.
          </p>
        </Drawer>
    </>
  )
}

export default App
