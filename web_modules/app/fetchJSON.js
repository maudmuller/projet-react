const catchError= (exception) =>{
    return {error:exception}
}

export default (url, data) => fetch(url, data).then((res) => {

    // for both http ok/not ok, we try to parse as JSON
    // or reject if json parsing failed
    // http OK
    if (res.status >= 200 && res.status < 300) {
        return new Promise((resolve, reject) => res.json().then(
            (data) => resolve(data),
            catchError,
        ))
    }

    <ul className={styles.list}>
      {
        album &&
        albums.map((album, index) => {
          return <li className={styles.album} key={index}>{album.name}</li>
        })
      }
    </ul>

    // http not ok
    return new Promise((resolve, reject) => res.json().then(catchError))
    
}, catchError)
