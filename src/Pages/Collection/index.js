import { useState } from 'react';

import Topbar from 'Components/Topbar';
import InputText from 'Components/InputText';
import Button from 'Components/Button';

import { Container, CollectionToolbar } from './styles';

export default function Collection() {
  const [collectionName, setCollectionName] = useState('');
  const [formError, setFormError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  function saveCollection() {
    setFormError(false);
    setLoading(true);

    if (collectionName.length < 5) {
      setFormError(true);
    }

    const collectionData = {
      title: collectionName
    }

    console.log('colecao salva', collectionData);

    setLoading(false);
  }

  return (
    <Container>
      <Topbar title="Collection" />
      <main>
        <div>
          <CollectionToolbar>
            <InputText
              label="Nome da colecao:"
              onChange={(e) => setCollectionName(e.target.value)}
              error={formError}
              errorMsg="Campo invalido!"
              minLength={5}
              style={{ width: '50%', maxWidth: '300px' }}
            />
            <Button
              onClick={saveCollection}
              disabled={loading}>
                Salvar
            </Button>
          </CollectionToolbar>
          <div>
            <header>
              <h2>Lista de cartas</h2>
              <button>Adicionar Cartas</button>
            </header>
          </div>
        </div>
      </main>
    </Container>
  )
}
