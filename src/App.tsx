import logo from '/logo.png';
import { Accordion, AccordionItem, Button } from '@igds/react';
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
      <Accordion multiexpand className="accordion">
          <AccordionItem
            icon="help-outlined"
            header="כותרת"
          >
            <p>
              רכיב האקורדיון מאפשר הצגת תוכן במרחב קטן דרך חשיפה הדרגתית. המשתמש
              מקבל פרטים מרכזיים על התוכן ויכול לבחור להרחיב את התוכן הזה על ידי
              פתיחת הרכיב.
            </p>
          </AccordionItem>
        </Accordion>
      <Button>כפתור בדיקה</Button>
    </section>
  )
}

export default App
