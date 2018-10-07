// export default {

// 	async function create(key, value){
// 		return await localStorage.setItem(key, JSON.stringify(value));
// 	} 
	
// 	async function update(key, value){
// 		return await localStorage.setItem(key, JSON.stringify(value));	
// 	}
	
// 	async function read(key){
// 		return await localStorage.getItem(key);
// 	}
	
// 	async function remove(key){
// 		await localStorage.removeItem(key);
// 	}
// }







export function create(key, value){
	return localStorage.setItem(key, JSON.stringify(value));
} 

export function update(key, value){
	return localStorage.setItem(key, JSON.stringify(value));	
}

export function read(key){
	const data = localStorage.getItem(key);
	try {
		 return JSON.parse(data);
	} catch (err) {
		 return data;
	}
}

export function remove(key){
	localStorage.removeItem(key);
}

