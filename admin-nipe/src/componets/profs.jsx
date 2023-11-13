
import {List, TextField, DateField, DeleteButton, Edit,Show, SimpleForm, Create, TextInput, DateInput , Pagination, DatagridConfigurable, TopToolbar, SelectColumnsButton, SimpleShowLayout, ShowButton, ExportButton, CreateButton, } from 'react-admin'



const ProfsPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
const ProfsListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <ExportButton/>
        <CreateButton/>
    </TopToolbar>
)


export const ProfsList= (props) => {
    return(
        <List {...props} pagination={<ProfsPagination/>} actions={<ProfsListActions/>}>
            <DatagridConfigurable>
                <TextField source='id'/>
                <TextField source='name' label= 'Nome'/>
                <TextField source='email'/>
                <TextField label='Descrição' source='description'/>
                <DateField label='Criado em' source='createdAt'/>
                <ShowButton/>
                <DeleteButton/>
            </DatagridConfigurable>
        </List>
    )
}
export const ProfsEdit= (props) => {
    return(
        <Edit {...props} title={"Editar Usuario"}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='name'/>
                <TextInput source='email'/>
                <TextInput multiline source='description'/>
                <DateInput source='createdAt'/>
            </SimpleForm>
        </Edit>
    )
}
export const ProfsCreate= (props) => {
    return(
        <Create {...props} title={"Criar Usuario"}>
            <SimpleForm>
                <TextInput source='name'/>
                <TextInput source='email'/>
                <TextInput multiline source='description'/>
            </SimpleForm>
        </Create>
    )
}
export const ProfsShow = (props) => {
    return(
        <Show >
            <SimpleShowLayout  {...props}>
                <TextField  source='name'/>
                <TextField  source='email'/>
                <TextField  source='description'/>
            </SimpleShowLayout>
        </Show>
    )
}

