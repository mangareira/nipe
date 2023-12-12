
import {List, TextField, DateField, Edit,Show, SimpleForm, Create, TextInput, DateInput , Pagination, DatagridConfigurable, TopToolbar, SelectColumnsButton, SimpleShowLayout, ShowButton, ExportButton, CreateButton, Datagrid, ListButton, } from 'react-admin'
import { useParams } from 'react-router-dom'



const StudentsPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
const StudentsListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <ExportButton/>
        <CreateButton/>
    </TopToolbar>
)


export const StudentsList= (props) => {
    return(
        <List {...props} pagination={<StudentsPagination/>} actions={<StudentsListActions/>}>
            <DatagridConfigurable>
                <TextField source='id'/>
                <TextField source='name' label= 'Nome'/>
                <TextField source='email'/>
                <TextField source='turma'/>
                <TextField source='periodo'/>
                <TextField label='Descrição' source='description'/>
                <DateField label='Criado em' source='createdAt'/>
                <ShowButton/>
                <ListButton/>
            </DatagridConfigurable>
        </List>
    )
}
export const StudentsEdit= (props) => {
    return(
        <Edit {...props} title={"Editar Usuario"}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='name'/>
                <TextInput source='email'/>
                <TextInput source='turma'/>
                <TextInput source='periodo'/>
                <TextInput multiline source='description'/>
                <DateInput source='createdAt'/>
            </SimpleForm>
        </Edit>
    )
}
export const StudentsCreate= (props) => {
    return(
        <Create {...props} title={"Criar Usuario"}>
            <SimpleForm>
                <TextInput source='name'/>
                <TextInput source='email'/>
                <TextInput source='password'/>
                <TextInput source='turma'/>
                <TextInput source='periodo'/>
                <TextInput multiline source='description'/>
            </SimpleForm>
        </Create>
    )
}
export const StudentsShow = (props) => {
    return(
        <Show >
            <SimpleShowLayout  {...props}>
                <TextField  source='name'/>
                <TextField  source='email'/>
                <TextField  source='turma'/>
                <TextField  source='periodo'/>
                <TextField  source='description'/>
            </SimpleShowLayout>
        </Show>
    )
}

export const ProjectList = () => {
    const { id } = useParams()

    return (
        <List resource='project' filter={{authorId: id}}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='tema'/>
            </Datagrid>

        </List>
    )
}