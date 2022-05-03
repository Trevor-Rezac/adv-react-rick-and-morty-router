import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

export default function CharacterDetail() {
  const [characterDetails, setCharacterDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchCharacterData = async () => {
      setIsLoading(true);
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      setCharacterDetails(data);
      setIsLoading(false);
    }
    fetchCharacterData();
  }, [])
  
  return (
    <>
      {isLoading 
      ? <><p>Loading...</p><LoadingSpinner /></>
      : <div>
          <h2>{characterDetails.name}</h2>
          <img src={characterDetails.image} alt={`image of ${characterDetails.name}`}/>
        </div>
    }
    </>
  )
}
