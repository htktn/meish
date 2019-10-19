//for card new
export const createCard = function(body) {
  return fetch('localhost:3000/cards', { method: 'post', body: JSON.stringify(body) })
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
export const getCard = function(id) {
  return fetch(`localhost:3000/cards/${id}`, {
    method: 'get',
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  });
};

//for user card show. 他の人のカードのshow
export const getUserCard = function(id) {
  return fetch(`localhost:3000/other_cards/${id}`, {
    method: 'get',
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  });
};

//for card index 
export const getAllCards = function() {
  return fetch('localhost:3000/cards', {
    method: 'get',
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  });
};

//for user card index. ユーザーが交換したカード一覧用
export const getAllUserCards = function() {
  return fetch('localhost:3000/other_cards', {
    method: 'get',
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
  return fetch(`localhost:3000/cards/${id}`, { method: 'put', body: JSON.stringify(body) })
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
  return fetch(`localhost:3000/cards/${id}`, {
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
  return fetch('localhost:3000/themes', {
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
  return fetch('localhost:3000/types', {
    method: 'get',
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  });
};
