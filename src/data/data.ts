import { Employee } from "../types/types";
// status
// contract
// add everywhere property contract: 'СМЗ'
// country the first 'RU', then 'TJ', then 'RU', then 'TJ'
// city everywhere 'Санкт-Петербург'
// birthday everywhere 23.06.2001
// age everywhere 21
// gender everywhere 'мужской'
// add property status with the value: the first - 'Истекают все документы', then 'Истекает патент', then 'Истекает патент', then 'Пропустил медосмотр', then 'Прошел все процедуры'

export const EMPLOYEES: Employee[] = [
    {
      id: 1,
      inn: 111,
      name: 'Константинопольский Константин Константинович',
      role: 'промышленный альпинист',
      contract: 'СМЗ',
      number: 133234343,
      citizenship: 'RU',
      city: 'Санкт-Петербург',
      birthday: '23.06.2001',
      age: 21,
      gender: 'мужской',
      status: 'Истекают все документы',
    },
    {
      id: 2,
      inn: 222,
      name: 'Иванов Иван Иванович',
      role: 'промышленный альпинист',
      contract: 'СМЗ',
      number: 1243234,
      citizenship: 'TJ',
      city: 'Санкт-Петербург',
      birthday: '23.06.2001',
      age: 21,
      gender: 'мужской',
      status: 'Истекает патент',
    },
    {
      id: 3,
      inn: 333,
      name: 'Константинопольский Константин Константинович',
      role: 'Designer',
      contract: 'СМЗ',
      number: 654565,
      citizenship: 'RU',
      city: 'Санкт-Петербург',
      birthday: '23.06.2001',
      age: 21,
      gender: 'мужской',
      status: 'Истекает патент',
    },
    {
      id: 4,
      inn: 444,
      name: 'Иванов Иван Иванович',
      role: 'промышленный альпинист',
      contract: 'СМЗ',
      number: 654565,
      citizenship: 'TJ',
      city: 'Санкт-Петербург',
      birthday: '23.06.2001',
      age: 21,
      gender: 'мужской',
      status: 'Пропустил медосмотр',
    },
    {
      id: 5,
      inn: 555,
      name: 'Константинопольский Константин Константинович',
      role: 'промышленный альпинист',
      contract: 'СМЗ',
      number: 654565,
      citizenship: 'RU',
      city: 'Санкт-Петербург',
      birthday: '23.06.2001',
      age: 21,
      gender: 'мужской',
      status: 'Прошел все процедуры',
    },
  ];
  
// ]className={styles.employeeName}>Константинопольский Константин Константинович{employee.name}</span>
// <span className={styles.employeeINN}>ИНН 1234567890</span>
// <span className={styles.employeeContract}>СМЗ</span>
// <span className={styles.employeeRole}>промышленный альпинист {employee.role}</span>
// </div>
// <div className={styles.cardRow}>
// <span className={styles.extraInfo}>RU 4002 571654</span>
// <span className={styles.extraInfo}>г. Санкт-Петербург</span>
// <span className={styles.extraInfo}>Дата рождения: 23.06.2001</span>
// <span className={styles.extraInfo}>Возраст: 21 год {employee.age}</span>
// <span className={styles.extraInfo}>Пол: мужской</span>