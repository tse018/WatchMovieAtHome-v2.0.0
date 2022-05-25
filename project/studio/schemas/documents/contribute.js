export default {
   title: 'Contributers',
   name: 'contribute',
   type: 'document',
   fields: [
      {
         title: 'Full Name',
         name: 'fullname',
         type: 'string',
         description: 'First name and Last name',
         validation: Rule => Rule.required().error('Please fill in first and last name')
      },
   ]
}