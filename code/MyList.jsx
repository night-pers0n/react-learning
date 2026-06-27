function MyList() {
  const [items, setItems] = useState(['I love']);
  
  return (
    <div>
      
      <ul>
        {
          items.map((i) => (
            <li key={i}>{i}</li>
          ))
        }
      </ul>
      
      <NewItemForm 
        onAddItem={(newItem) => 
          setItems([...items, newItem])
        }
      />
      
    </div>
  );
}