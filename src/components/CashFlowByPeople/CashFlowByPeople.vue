<template>
    <section class="CashFlowByPeople cashflow-chart px-4 pb-4 pt-4 bg-white is-drop-shadow is-theme-lg-radius overflow-hidden">
        <h5 class="jifie-card-title mb-4">Cash flow</h5>
        <ul class="list-unstyled CashFlowByPeople-lists mb-0 is-scrollable">
            <li v-for="CashFlowByPeople in CashFlowByPeoples" :key="CashFlowByPeople.id" class="CashFlowByPeople-list">
                <router-link class="CashFlowByPeople-list-link" to="/CashFlowByPeople-details/:id">
                    <img :src="CashFlowByPeople.image" alt="img" class="img-fluid people-img" />
                    <div class="CashFlowByPeople-info">
                        <p class="name mb-1">{{ CashFlowByPeople.name }}</p>
                        <p class="balance text-clr-green">{{ `$${CashFlowByPeople.balance}` }}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name : 'CashFlowByPeople',
        data() {
            return {
                CashFlowByPeoples: [
                    { id :  Date.now() ,image : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Philips Lawrence' , balance : '500.25' },
                    { id :  Date.now(), image : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Cameron Williamson' , balance : '1500.25' },
                    { id :  Date.now(), image : 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Wade Warren' , balance : '220.25' },
                    { id :  Date.now(), image : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Cody Fisher' , balance : '150.25' },
                    { id :  Date.now() ,image : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Philips Lawrence' , balance : '500.25' },
                    { id :  Date.now(), image : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Cameron Williamson' , balance : '1500.25' },
                    { id :  Date.now(), image : 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Wade Warren' , balance : '220.25' },
                    { id :  Date.now(), image : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Cody Fisher' , balance : '150.25' },
                    { id :  Date.now() ,image : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Philips Lawrence' , balance : '500.25' },
                    { id :  Date.now(), image : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Cameron Williamson' , balance : '1500.25' },
                    { id :  Date.now(), image : 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Wade Warren' , balance : '220.25' },
                    { id :  Date.now(), image : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Cody Fisher' , balance : '150.25' },
                    { id :  Date.now() ,image : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Philips Lawrence' , balance : '500.25' },
                    { id :  Date.now(), image : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Cameron Williamson' , balance : '1500.25' },
                    { id :  Date.now(), image : 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Wade Warren' , balance : '220.25' },
                    { id :  Date.now(), image : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' , name : 'Cody Fisher' , balance : '150.25' },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import './CashFlowByPeople.scss';
</style>