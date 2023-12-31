import React from 'react';
import Block from 'components/common/Block';
import BlockContent from 'components/common/BlockContent';
import Paragraph from 'components/legal/Paragraph';

function TermsOfService() {
    return (
        <Block color="white">
            <BlockContent style={{ textAlign: 'left' }}>
                <Paragraph level={1} title="Terms of Service">
                    Thanks for using TaskUnifier. You will find in this notice the conditions under which you may use this website
                    and which you have to accept. By using the website TaskUnifier, you agree to be bound by these terms.
                    It is therefore of the utmost importance that you read them carefully and understand them. In the case
                    you do not accept the above mentioned conditions, please do not use our website.

                    <Paragraph level={2} title="Damages and claim">
                        The use of our site is always &quot;at your own risk&quot;. In the case you are dissatisfied for whatever reason, your
                        only remedy is to stop using our site. Neither TaskUnifier nor any of its partners nor suppliers could be held liable:
                        for damage resulting from usage, inaccessibility of the contents of this site, and this whatever warranty,
                        contract or other legal document you may avail yourself of.
                        The definition of &quot;damage&quot; mentioned in this provision includes, but is not limited to, the list of the
                        following problems: impossibility to access the website, theft, distortion, alteration, loss of data, virus or cyber attack.
                    </Paragraph>
                    <Paragraph level={2} title="Confidentiality">
                        No data posted by the user on his account on our website will be divulgated intentionally nor sold.
                        The data are stored on the servers of TaskUnifier in a secured way. However, TaskUnifier will not be held
                        liable for problems concerning data, as mentioned in the provision &quot;Damages and claims&quot;.
                    </Paragraph>
                    <Paragraph level={2} title="Protection of copyright">
                        The contents of TaskUnifier are protected by copyright and by other laws, whether in Europe, in the United States
                        or elsewhere. The data protected by copyright include the name TaskUnifier, pictures, texts, concept, programming,
                        source code, model and layout. You may not distribute nor commercialize the copyrighted material, except with
                        the written permission of the owners of the site.
                        <br /><br />
                        TaskUnifier does not claim ownership over contents submitted to the site by its users.
                        Submitting data to the site does not place them into the public domain. The owner of copyrights keeps full ownership
                        over any work submitted to this site. The tasks, notes and any other data added to your user account remain private.
                    </Paragraph>
                    <Paragraph level={2} title="Data retention">
                        TaskUnifier maintains backups of all data in order to solve a problem or recover from a possible failure.
                        The backups are maintained in a secure way. TaskUnifier does not guarantee that its backups will function error-free
                        and will reject any request to restore (lost or altered) data. You are therefore responsible for maintaining and
                        managing your own backups.
                        <br /><br />
                        TaskUnifier will retain your information on its server as long as your subscription is valid. You can delete your
                        account and all the data that are linked to it at any time. An account with a free subscription can be deleted by
                        TaskUnifier after six months of inactivity (no use and no connection).
                    </Paragraph>
                    <Paragraph level={2} title="Contents of the site">
                        Some of the content on the site is provided by the users. TaskUnifier cannot be held responsible for such content
                        and has no obligation to monitor the information posted on the site. In a more general way, TaskUnifier disclaims
                        all liability and does not endorse the reliability of the information posted on its site. TaskUnifier does not
                        endorse any opinions expressed on the site. The user accepts that some areas of the site may be public or
                        semi private (such as the issue tracker), and therefore others may read some information he writes on that area of the site.
                    </Paragraph>
                    <Paragraph level={2} title="Violation of copyrights">
                        In the public or semi-private part of the site i.e. the issue tracker, at its discretion, TaskUnifier may remove any
                        material posted by the user that infringes the rights of others. On the other hand, it is not liable for the
                        use that other users could make of this material.
                    </Paragraph>
                    <Paragraph level={2} title="Warranty">
                        TaskUnifier and its contents are provided without warranties of any kind. The site disclaims all warranties including
                        accuracy and reliability of its content, its services, texts, images, links...
                        The site does not warrant that it operates error-free, that its servers are free of computer viruses
                        nor any other potentially harmful items.
                        TaskUnifier cannot be held liable if the use of the site results in a computer bug or in the need of replacing equipment or data.
                    </Paragraph>
                    <Paragraph level={2} title="Indemnity">
                        By using this site, you waive the right to institute any proceedings against the website TaskUnifier, his owners, and his employees.
                    </Paragraph>
                    <Paragraph level={2} title="Litigation">
                        Only Brussels judicial tribunals or law courts have competent jurisdiction in any litigation that may occur due to the existence or the use of the website.
                    </Paragraph>
                </Paragraph>
                <br /><br />
            </BlockContent>
        </Block>
    );
}

export default TermsOfService;