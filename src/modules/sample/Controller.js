import Sample from './sampleModel.js'
import HTTPStatus from 'http-status'
// eslint-disable-next-line no-unused-vars
import * as util from './sampleUtil'

/**
 * @group samples - Operations about samples
 *
 */

export async function getSamplesStats(req, res, next) {
	try {
		res.samplesStats = {
			count: await Sample.estimatedDocumentCount()
		}

		next()
	} catch (e) {
		return res.status(HTTPStatus.BAD_REQUEST).json(e)
	}
}

export async function getSamples(req, res, next) {
	try {
		let { docs, ...samplesMeta } = await Sample.paginate({}, req.parsedParams)

		res.samples = docs
		res.samplesMeta = samplesMeta

		next()
	} catch (e) {
		return res.status(HTTPStatus.BAD_REQUEST).json(e)
	}
}

export async function getSampleById(req, res, next) {
	try {
		res.sample = await Sample.findById(req.params.id)

		next()
	} catch (e) {
		return res.status(HTTPStatus.BAD_REQUEST).json(e)
	}
}

export async function createSample(req, res, next) {
	try {
		res.sample = await Sample.create(req.body)

		next()
	} catch (e) {
		return res.status(HTTPStatus.BAD_REQUEST).json(e)
	}
}

export async function updateSample(req, res, next) {
	try {
		let sample = await Sample.findById(req.params.id)

		Object.keys(req.body).forEach(key => {
			sample[key] = req.body[key]
		})
		await sample.save()
		res.sample = sample

		next()
	} catch (e) {
		return res.status(HTTPStatus.BAD_REQUEST).json(e)
	}
}

export async function deleteSample(req, res, next) {
	try {
		const sample = await Sample.findById(req.params.id)

		await sample.remove()

		next()
	} catch (e) {
		return res.status(HTTPStatus.BAD_REQUEST).json(e)
	}
}