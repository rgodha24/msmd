<script lang="ts">
    import type {Todo} from "@prisma/client"

    export let todo: Todo
</script> 

<div class="flex">
{JSON.stringify(todo)}
</div>