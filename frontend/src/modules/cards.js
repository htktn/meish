//for card new
export const createCard = function(body) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/cards`, {
    credentials: 'include',
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.text();
      } else {
        throw Error(`Request rejected with status ${res.status}`);
      }
    })
    .then(res => {
      return JSON.parse(res);
    });
};

//for card show
export const getBelongingCard = function(id) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}`, {
    method: 'get',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  });
};

//for user card show. 他の人のカードのshow
export const getReceivedCard = function(id) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/other_cards/${id}`, {
    method: 'get',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  });
};

//for card index
export const getAllBelongingCards = function() {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/cards`, {
    method: 'get',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  });
};

//for user card index. ユーザーが交換したカード一覧用
export const getAllReceivedCards = function() {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/other_cards`, {
    method: 'get',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  });
};

//PUT /cards/:id
export const updateCard = function(id, body) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}`, { method: 'put', body: JSON.stringify(body) })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  });
};

//DELETE /cards/:id
export const deleteCard = function(id) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}`, {
    method: 'delete',
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  });
};

//GET /themes
export const getThemes = function() {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/themes`, {
    credentials: 'include',
    method: 'get',
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  });
};

//GET /types
export const getTypes = function() {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/types`, {
    method: 'get',
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  });
};
