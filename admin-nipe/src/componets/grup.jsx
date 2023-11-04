
import {List, TextField, DateField, DeleteButton, Edit,Show, SimpleForm, Create, TextInput, DateInput , Pagination, DatagridConfigurable, TopToolbar, SelectColumnsButton, SimpleShowLayout, ShowButton, ExportButton, } from 'react-admin'



const GrupPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
const GrupListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <ExportButton/>
    </TopToolbar>
)


export const GrupList= (props) => {
    return(
        <List {...props} pagination={<GrupPagination/>} actions={<GrupListActions/>}>
            <DatagridConfigurable>
                <TextField source='id'/>
                <TextField source='nameGrup' label= 'Nomes'/>
                <TextField source='tema'/>
                <TextField label='Descrição' source='description'/>
                <DateField label='Criado em' source='createdAt'/>
                <ShowButton/>
                <DeleteButton/>
            </DatagridConfigurable>
        </List>
    )
}
export const GrupEdit= (props) => {
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
export const GrupCreate= (props) => {
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
export const GrupShow = (props) => {
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

