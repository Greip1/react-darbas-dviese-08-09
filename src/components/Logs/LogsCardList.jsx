import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from '../Pets/Pets.module.css';
import LogsCard from './LogsCard';

function LogsCardList() {
  const { petId } = useParams();
  const [logsArr, setLogsArr] = useState([]);

  //   const newId = Math.random().toString().split('.')[1];

  async function getLogs() {
    const res = await fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${petId}`);
    const dataInJs = await res.json();
    console.log('logs arr', dataInJs);
    setLogsArr(dataInJs);
  }
  useEffect(() => {
    getLogs();
  }, []);

  return (
    <div className={css.container}>
      {logsArr.map((obj) => {
        const newId = Math.random().toString().split('.')[1];
        return <LogsCard key={newId} {...obj} />;
      })}
    </div>
  );
}

export default LogsCardList;
