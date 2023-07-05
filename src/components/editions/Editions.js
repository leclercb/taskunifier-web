import React from 'react';
import EditionElement from 'components/editions/EditionElement';
import Translations from 'constants/Translations';

function Editions() {
    const translations = Translations;

    return (
        <table className="editions">
            <thead>
                <tr>
                    <td style={{ width: 30 }} />
                    <td>{translations.editions_title}</td>
                    <td style={{ width: 250 }}>{translations.base_pro}</td>
                </tr>
            </thead>
            <tbody>
                <EditionElement
                    icon="thumbtack"
                    title={translations.editions_contacts_title}
                    tooltip={translations.editions_contacts_tooltip}
                    pro={true}
                    index={1} />
                <EditionElement
                    icon="thumbtack"
                    title={translations.editions_contexts_title}
                    tooltip={translations.editions_contexts_tooltip}
                    pro={true}
                    index={2} />
                <EditionElement
                    icon="folder"
                    title={translations.editions_folders_title}
                    tooltip={translations.editions_folders_tooltip}
                    pro={true}
                    index={3} />
                <EditionElement
                    icon="crosshairs"
                    title={translations.editions_goals_title}
                    tooltip={translations.editions_goals_tooltip}
                    pro={true}
                    index={4} />
                <EditionElement
                    icon="crosshairs"
                    title={translations.editions_locations_title}
                    tooltip={translations.editions_locations_tooltip}
                    pro={true}
                    index={5} />
                <EditionElement
                    icon="align-center"
                    title={translations.editions_notes_title}
                    tooltip={translations.editions_notes_tooltip}
                    pro={true}
                    index={6} />
                <EditionElement
                    icon="tasks"
                    title={translations.editions_tasks_title}
                    tooltip={translations.editions_tasks_tooltip}
                    pro={true}
                    index={7} />
                <EditionElement
                    icon="file-alt"
                    title={translations.editions_task_templates_title}
                    tooltip={translations.editions_task_templates_tooltip}
                    pro={true}
                    index={8} />
                <EditionElement
                    icon="search"
                    title={translations.editions_filters_title}
                    tooltip={translations.editions_filters_tooltip}
                    pro={true}
                    index={9} />
                <EditionElement
                    icon="puzzle-piece"
                    title={translations.editions_custom_fields_title}
                    tooltip={translations.editions_custom_fields_tooltip}
                    pro={true}
                    index={10} />
                <EditionElement
                    icon="sync-alt"
                    title={translations.editions_synchronization_title}
                    tooltip={translations.editions_synchronization_tooltip}
                    pro={true}
                    index={11} />
            </tbody>
            <tfoot>
                <tr className="offer">
                    <td />
                    <td />
                    <td>{translations.base_free}</td>
                </tr>
                <tr className="info">
                    <td colSpan={3}>
                        <span>{translations.editions_hover}</span>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}

export default Editions;