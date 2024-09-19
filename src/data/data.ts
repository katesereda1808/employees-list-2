import { Employee } from "../types/types";

export const EMPLOYEES: Employee[] = [
    { id: 1, inn: 111, name: 'Константинопольский Константин Константинович', role: 'промышленный альпинист', status: 'смз', number: 133234343, citizenship: 'RU', city: 'city', birthday: 'birthday', age: 23, gender: 'муж' },
    { id: 2, inn: 222, name: 'Иванов Иван Иванович', role: 'промышленный альпинист', status: 'status', number: 1243234, citizenship: 'RU', city: 'city', birthday: 'birthday', age: 44, gender: 'муж' },
    { id: 3, inn: 333, name: 'Константинопольский Константин Константинович', role: 'Designer', status: 'status', number: 654565, citizenship: 'RU', city: 'city', birthday: 'birthday', age: 30, gender: 'муж' },
    { id: 3, inn: 333, name: 'Иванов Иван Иванович', role: 'промышленный альпинист', status: 'status', number: 654565, citizenship: 'RU', city: 'city', birthday: 'birthday', age: 30, gender: 'муж' },
    { id: 3, inn: 333, name: 'Константинопольский Константин Константинович', role: 'промышленный альпинист', status: 'status', number: 654565, citizenship: 'RU', city: 'city', birthday: 'birthday', age: 30, gender: 'муж' },
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