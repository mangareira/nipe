
import {List, TextField, DateField, DeleteButton, Edit,Show, SimpleForm, Create, TextInput, DateInput , Pagination, DatagridConfigurable, TopToolbar, SelectColumnsButton, SimpleShowLayout, ShowButton, ExportButton, } from 'react-admin'



const DicPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
const DicListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <ExportButton/>
    </TopToolbar>
)


export const DicList= (props) => {
    return(
        <List {...props} pagination={<DicPagination/>} actions={<DicListActions/>}>
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
export const DicEdit= (props) => {
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
export const DicCreate= (props) => {
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
export const DicShow = (props) => {
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

