import { type Interpolation, type Theme } from '@emotion/react'

function createStyles<T extends Record<string, Interpolation<Theme>>>(arg: T): T {
	return arg
}

export { createStyles }
