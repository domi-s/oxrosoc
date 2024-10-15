<script>
    import Document from "$lib/components/Document.svelte";

    let content = `
        <p>You can view and download the Constitution of the University of Oxford Romanian Society at the following link: <a href='/documents/constitution.docx' target='_blank'>OxRoSoc Constitution</a>.</p>
    `;
</script>

<Document
    title="Constitution"
    content={content}
/>