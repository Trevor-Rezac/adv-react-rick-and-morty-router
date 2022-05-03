import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { Link } from 'react-router-dom'

export default function CharacterList() {
  const [characterList, setCharacterList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterData = async () => {
      setIsLoading(true)
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await res.json();
      setCharacterList(results)
      setIsLoading(false)
    }
    fetchCharacterData();
  }, [])

  return (
    <>
    {isLoading
    ? <><p>Loading...</p><LoadingSpinner /></>
    : <div>
      {characterList.map((character) => (
          <Link key={character.id} to={`/characters/${character.id}`}> 
            <h4>{character.name}</h4>
          </Link>      
      )
      )}
    </div>
}
    </>
  )
}
