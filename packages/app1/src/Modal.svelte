<script>
    let showModal = false;

    document.addEventListener("modal-trigger", (e) => {
        showModal = e.detail.active;
    });

    const closeModal = () => {
        showModal = false;
    };
</script>

{#if showModal === true}
    <div class="modal_container">
        <div class="card">
            <header>
                <h4>Modal Sample in Svelte - App1</h4>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <footer class="is-right">
                <button class="button primary" on:click={closeModal}
                    >Submit</button
                >
                <button class="button" on:click={closeModal}>Cancel</button>
            </footer>
        </div>
    </div>
{/if}

<style>
    .modal_container {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>
