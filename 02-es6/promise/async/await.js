/*
* 处理async/await异常抛出错处
* handle 函数接受一个 Promise 对象作为参数，并总是 resolve 它，以 [data|undefined, Error|undefined] 的形式返回结果
*   如果 Promise resolve 了，handle 函数返回 [data, undefined]
*   如果 Promise reject 了，handle 函数返回 [undefined, Error]
* */

/**
 * @description ### Returns Go / Lua like responses(data, err)
 * when used with await
 *
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 *
 * When used with Promise.all([req1, req2, req3])
 * - Example response [ [data1, data2, data3], undefined ]
 * - Example response [ undefined, Error ]
 *
 *
 * When used with Promise.race([req1, req2, req3])
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 * @param {Promise} promise
 * @returns {Promise} [ data, undefined ]
 * @returns {Promise} [ undefined, Error ]
 */
const handle = (promise) => {
  return promise
    .then(data => ([data, undefined]))
    .catch(error => Promise.resolve([undefined, error]));
}

/*
* @description:通过封装promise来处理请求的异常处理，使用了一个工具函数 handle，如此就可以避免 Unhandled promise rejection 报错，还能细粒度的处理错误
* */
async function userProfile() {
  let [user, userErr] = await handle(getUser());

  if (userErr) throw new Error('Could not fetch user details');

  let [friendsOfUser, friendErr] = await handle(
    getFriendsOfUser(userId)
  );

  if (friendErr) throw new Error('Could not fetch user\'s friends');

  let [posts, postErr] = await handle(getUsersPosts(userId));

  if (postErr) throw new Error('Could not fetch user\'s posts');

  showUserProfilePage(user, friendsOfUser, posts);
}
