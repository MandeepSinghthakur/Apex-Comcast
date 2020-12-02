import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MaterialTable from 'material-table';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
       <BasicTreeData></BasicTreeData>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          All Rights reserved 2020
        </a>
      </footer>
    </div>
  )
}

function BasicTreeData() {
  return (
    <MaterialTable
      title="Basic Tree Data Preview"
      data={[
        {
          id: 1,
          name: 'a',
          birthYear: 1987,
          birthCity: 63,
          sex: 'Male',
          type: 'adult',
        },
        {
          id: 2,
          name: 'b',
          surname: 'Baran',
          birthYear: 1988,
          birthCity: 34,
          sex: 'Female',
          type: 'adult',
          parentId: 1,
        },
        {
          id: 3,
          name: 'c',
          surname: 'Baran',
          birthYear: 1989,
          birthCity: 34,
          sex: 'Female',
          type: 'child',
          parentId: 1,
        },
        {
          id: 4,
          name: 'd',
          surname: 'Baran',
          birthYear: 1990,
          birthCity: 34,
          sex: 'Female',
          type: 'child',
          parentId: 3,
        },
        {
          id: 5,
          name: 'e',
          surname: 'Baran',
          birthYear: 1991,
          birthCity: 34,
          sex: 'Female',
          type: 'child',
        },
        {
          id: 6,
          name: 'f',
          surname: 'Baran',
          birthYear: 1992,
          birthCity: 34,
          sex: 'Female',
          type: 'child',
          parentId: 5,
        },
      ]}
      columns={[
        { title: 'Subject', field: 'name' },
        { title: 'January', field: 'birthYear' },
        { title: 'Febraury', field: 'birthCity' },
        { title: 'March', field: 'birthYear'},
        { title: 'April', field: 'birthCity' },
        { title: 'May', field: 'sex' },
        { title: 'June', field: 'type'},
        { title: 'July', field: 'birthCity' },
        { title: 'August', field: 'parentId' },
        { title: 'September', field: 'birthYear'},
        { title: 'October', field: 'birthYear' },
        { title: 'November', field: 'birthCity' },
        { title: 'December', field: 'birthYear' }
        
      ]}
      parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
    />
  )
}
