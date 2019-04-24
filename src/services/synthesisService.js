/* eslint-disable no-console */
import axios from 'axios'
// import HTTPStatus from 'http-status'

export async function requestSynthesis(
	subUrl,
	voice = 'hn_male_xuantin_vdts_48k-hsmm'
) {
	let url = 'http://api.thuyetminhphim.vn/synthesis'
	let callback = 'http://api-social.thuyetminhphim.com/api/voiceovers/callback'
	return await axios
		.get(`${url}?callback=${callback}&subtitle_url=${subUrl}&voice=${voice}`)
		.then(function(response) {
			return response.data
		})
		.catch(function(e) {
			console.log('error', e)
			throw e
		})
}

export async function requestResynthesis(requestId) {
	return await axios
		.get(`http://api.thuyetminhphim.vn/resynthesis?request_id=${requestId}`)
		.then(function(response) {
			return response.data
		})
		.catch(function(e) {
			console.log('error', e)
			throw e
		})
}

export async function checkSynthesis(requestId) {
	return await axios
		.get('http://api.thuyetminhphim.vn/check?request_id=' + requestId)
		.then(function(response) {
			return response.data
		})
		.catch(function(e) {
			// eslint-disable-next-line no-console
			console.log('error', e)
			throw e
		})
}

export function doneSynthesis(movieId, subUrl) {}
