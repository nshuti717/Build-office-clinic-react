function LibraryCards({ bookInfo }) {
  return (
    <div style={{ border: '3px solid blue', marginTop: '3px', padding: '8px' }}>
      <div>{bookInfo.code}</div>
      <div>{bookInfo.title}</div>
      <div>{bookInfo.price}</div>
    </div>
  )
}

export default LibraryCards
