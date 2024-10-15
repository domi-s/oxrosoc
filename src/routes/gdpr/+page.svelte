<script>
    import Document from "$lib/components/Document.svelte";

    let content = `
        <p><strong>Effective Date:</strong> 14 October 2024</p>

        <p>The University of Oxford Romanian Society ("the Society") is committed to protecting your personal data and respecting your privacy in compliance with the General Data Protection Regulation (GDPR). This document outlines how we collect, use, and store personal data, particularly in relation to membership, event organization, and form submissions. By becoming a member of the Society or participating in our events, you agree to the terms outlined in this document.</p>

        <h2>1. Data Controller</h2>
        <p>The data controller responsible for the collection and use of your personal data is the University of Oxford Romanian Society, represented by the Society’s Committee.</p>

        <h2>2. Personal Data We Collect</h2>
        <p>The Society collects the following categories of personal data from its members and event participants:</p>
        <ul>
        <li><strong>Contact Information:</strong> Full name, email address, phone number.</li>
        <li><strong>Demographic Information:</strong> Nationality, academic status (e.g., student, alumni, staff).</li>
        <li><strong>Event Information:</strong> Registration details for events (RSVPs, dietary preferences, emergency contact information).</li>
        <li><strong>Photographs and Videos:</strong> Images or recordings taken at events.</li>
        <li><strong>Other Data:</strong> Any other information you provide via forms or communications for specific events or purposes.</li>
        </ul>

        <h2>3. Purpose of Processing</h2>
        <p>We collect and process your personal data for the following purposes:</p>
        <ul>
        <li><strong>Membership Management:</strong> To maintain a record of society members and communicate with them about events, announcements, and opportunities.</li>
        <li><strong>Event Organization:</strong> To organize and manage society events, including sending invitations, collecting RSVPs, and catering to special needs (e.g., dietary preferences, accessibility).</li>
        <li><strong>Communications:</strong> To keep you informed about upcoming events, news, and opportunities related to the Society via email or phone.</li>
        <li><strong>Compliance:</strong> To comply with legal obligations and ensure the security and safety of our members at events.</li>
        <li><strong>Photography and Videography:</strong> Photos or videos may be taken during events to promote the Society's activities on our website, social media, or internal communications.</li>
        </ul>

        <h2>4. Legal Basis for Processing</h2>
        <p>We process your personal data on the following legal grounds:</p>
        <ul>
        <li><strong>Consent:</strong> We will seek your explicit consent for certain types of data processing, such as participation in events or inclusion in promotional materials (photos/videos).</li>
        <li><strong>Legitimate Interest:</strong> We process your personal data based on our legitimate interest to promote the Society, organize events, and communicate with our members.</li>
        <li><strong>Legal Obligations:</strong> We may process data to comply with legal obligations related to event safety, health regulations, or academic regulations of the University of Oxford.</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>We will retain your personal data only for as long as necessary to fulfill the purposes outlined in this document or as required by law. Typically, this means:</p>
        <ul>
        <li>Contact information is retained for the duration of your membership and up to 1 year after your membership expires.</li>
        <li>Event-related data (RSVPs, dietary preferences) is retained for the duration of the event and up to 6 months after the event concludes.</li>
        <li>Photographs and videos may be retained indefinitely unless you request their removal.</li>
        </ul>

        <h2>6. Your Rights Under GDPR</h2>
        <p>Under the GDPR, you have the following rights regarding your personal data:</p>
        <ul>
        <li><strong>Right to Access:</strong> You can request access to your personal data held by the Society.</li>
        <li><strong>Right to Rectification:</strong> You can request correction of inaccurate or incomplete personal data.</li>
        <li><strong>Right to Erasure:</strong> You can request that your personal data be erased (subject to certain limitations).</li>
        <li><strong>Right to Restrict Processing:</strong> You can request a restriction on the processing of your personal data.</li>
        <li><strong>Right to Object:</strong> You can object to the processing of your personal data for certain purposes.</li>
        <li><strong>Right to Data Portability:</strong> You can request a copy of your personal data in a machine-readable format.</li>
        </ul>
        <p>To exercise any of these rights, please contact us using the methods mentioned on our "Contact" page.</p>

        <h2>7. Sharing of Personal Data</h2>
        <p>We do not share your personal data with third parties except:</p>
        <ul>
        <li><strong>Service Providers:</strong> Third-party service providers (e.g., venue coordinators, caterers) involved in the organization of events may receive your information when necessary.</li>
        <li><strong>University of Oxford:</strong> Data may be shared with relevant University departments for the purpose of event coordination or compliance with university regulations.</li>
        <li><strong>Legal Authorities:</strong> If required, we may share data to comply with a legal obligation.</li>
        </ul>
        <p>We ensure that all third-party service providers adhere to GDPR regulations and treat your data securely.</p>

        <h2>8. Security of Your Data</h2>
        <p>We are committed to ensuring that your personal data is secure. We implement appropriate technical and organizational measures to safeguard your personal data from unauthorized access, loss, or misuse.</p>

        <h2>9. Changes to This Privacy Notice</h2>
        <p>We reserve the right to amend this privacy notice at any time to reflect changes in our practices or the law. Any significant changes will be communicated to you.</p>

        <h2>10. Contact Information</h2>
        <p>If you have any questions or concerns regarding this privacy notice or your personal data, please contact:</p>
        <p><strong>University of Oxford Romanian Society</strong><br />oxrosoc [at] gmail [dot] com<br />Other methods of contacting us can be found on our "Contact" page.</p>

        <p>By signing up for membership or attending events organized by the University of Oxford Romanian Society, you acknowledge that you have read and agree to this GDPR Agreement.</p>
    `;
</script>

<Document
    title="GDPR Agreement"
    content={content}
/>