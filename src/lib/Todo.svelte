<script lang="ts">
    import type {Todo} from "@prisma/client"

    export let todo: Todo
    function toggleStatus() {
        console.log("complete not implemented")
    }
    let checked: boolean = todo.done
</script> 

<div class="flex my-4">
<input type="checkbox" name="complete" id="complete" bind:checked={checked}>

</div>