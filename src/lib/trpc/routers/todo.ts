import { router, procedure } from "../router"

console.log(procedure)

export const todoRouter = router({
	test: procedure.query(() => "test" as const)
})
