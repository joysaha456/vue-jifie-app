<template>
    <div class="invoice bg-white is-theme-lg-radius overflow-hidden px-4 py-4 is-drop-shadow">
        <div class="invoice-header mb-4">
            <div class="row align-items-center">
                <div class="col-xl-4">
                    <h5 class="jifie-card-title mb-4">Outstanding invoices</h5>
                </div>
                <div class="col-xl-8">
                    <div class="invoice-pills text-end">
                        <ul class="nav nav-pills d-inline-flex" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link px-0 me-4 active" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true">
                                    Invoices to Be paid
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link px-0" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2" aria-selected="false">
                                    Invoices to Receive
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                <InvoiceTable :tableData="invoicesToBePaid.tableData" :scrollable="true" />
            </div>
            <div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                <InvoiceTable :tableData="invoicesToReceive.tableData" :scrollable="true" />
            </div>
        </div>
    </div>
</template>


<script>
import InvoiceTable from '@/components/Invoices/InvoiceTable.vue';
export default {
    components : {InvoiceTable},
    data() {
        return {
            invoicesToBePaid : {
                tableData: {
                    tableColumns : ['Client' , 'Invoice Id' , 'Status' , 'Due Date' , 'Amount' , '' ],
                    tableRows : [
                        { 
                            id : Date().now , 
                            clientName : 'Brooklyn Simmons' ,
                            clientEmail : 'brooklynsimmons@gmail.com' ,
                            invoiceId : '5JGFU58' ,
                            status : 'success',
                            statusText : 'Paid',
                            dueDate : '7 days late',
                            amount : '630.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Mrs. Dennis Schulist' ,
                            clientEmail : 'Karley_Dach@jasper.info' ,
                            invoiceId : '5JGFU58' ,
                            status : 'pending',
                            statusText : 'Pending',
                            dueDate : '7 days late',
                            amount : '630.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Kurtis Weissnat' ,
                            clientEmail : 'Telly.Hoeger@billy.biz' ,
                            invoiceId : '5JGFU58' ,
                            status : 'cancaled',
                            statusText : 'Overdue',
                            dueDate : '7 days late',
                            amount : '630.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Brooklyn Simmons' ,
                            clientEmail : 'brooklynsimmons@gmail.com' ,
                            invoiceId : '5JGFU58' ,
                            status : 'success',
                            statusText : 'Paid',
                            dueDate : '7 days late',
                            amount : '630.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Mrs. Dennis Schulist' ,
                            clientEmail : 'Karley_Dach@jasper.info' ,
                            invoiceId : '5JGFU58' ,
                            status : 'pending',
                            statusText : 'Pending',
                            dueDate : '7 days late',
                            amount : '630.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Kurtis Weissnat' ,
                            clientEmail : 'Telly.Hoeger@billy.biz' ,
                            invoiceId : '5JGFU58' ,
                            status : 'cancaled',
                            statusText : 'Overdue',
                            dueDate : '7 days late',
                            amount : '630.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Brooklyn Simmons' ,
                            clientEmail : 'brooklynsimmons@gmail.com' ,
                            invoiceId : '5JGFU58' ,
                            status : 'success',
                            statusText : 'Paid',
                            dueDate : '7 days late',
                            amount : '630.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Mrs. Dennis Schulist' ,
                            clientEmail : 'Karley_Dach@jasper.info' ,
                            invoiceId : '5JGFU58' ,
                            status : 'pending',
                            statusText : 'Pending',
                            dueDate : '7 days late',
                            amount : '630.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Kurtis Weissnat' ,
                            clientEmail : 'Telly.Hoeger@billy.biz' ,
                            invoiceId : '5JGFU58' ,
                            status : 'cancaled',
                            statusText : 'Overdue',
                            dueDate : '7 days late',
                            amount : '630.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Brooklyn Simmons' ,
                            clientEmail : 'brooklynsimmons@gmail.com' ,
                            invoiceId : '5JGFU58' ,
                            status : 'success',
                            statusText : 'Paid',
                            dueDate : '7 days late',
                            amount : '630.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Mrs. Dennis Schulist' ,
                            clientEmail : 'Karley_Dach@jasper.info' ,
                            invoiceId : '5JGFU58' ,
                            status : 'pending',
                            statusText : 'Pending',
                            dueDate : '7 days late',
                            amount : '630.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Kurtis Weissnat' ,
                            clientEmail : 'Telly.Hoeger@billy.biz' ,
                            invoiceId : '5JGFU58' ,
                            status : 'cancaled',
                            statusText : 'Overdue',
                            dueDate : '7 days late',
                            amount : '630.44',
                        },
                    ]   
                }
            },
            invoicesToReceive : {
                tableData: {
                    tableColumns : ['Client' , 'Invoice Id' , 'Status' , 'Due Date' , 'Amount' , '' ],
                    tableRows : [
                        { 
                            id : Date().now , 
                            clientName : 'Leanne Graham' ,
                            clientEmail : 'Sincere@april.biz' ,
                            invoiceId : '45rt5ytrfv' ,
                            status : 'success',
                            statusText : 'Paid',
                            dueDate : '10 days late',
                            amount : '58452.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Ervin Howell' ,
                            clientEmail : 'Shanna@melissa.tv' ,
                            invoiceId : 'drtfgv' ,
                            status : 'pending',
                            statusText : 'Pending',
                            dueDate : '12 days late',
                            amount : '556.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Clementine Bauch' ,
                            clientEmail : 'Nathan@yesenia.net' ,
                            invoiceId : '585444rgt' ,
                            status : 'success',
                            statusText : 'Paid',
                            dueDate : '12 days late',
                            amount : '59852.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Leanne Graham' ,
                            clientEmail : 'Sincere@april.biz' ,
                            invoiceId : '45rt5ytrfv' ,
                            status : 'success',
                            statusText : 'Paid',
                            dueDate : '10 days late',
                            amount : '58452.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Ervin Howell' ,
                            clientEmail : 'Shanna@melissa.tv' ,
                            invoiceId : 'drtfgv' ,
                            status : 'pending',
                            statusText : 'Pending',
                            dueDate : '12 days late',
                            amount : '556.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Clementine Bauch' ,
                            clientEmail : 'Nathan@yesenia.net' ,
                            invoiceId : '585444rgt' ,
                            status : 'success',
                            statusText : 'Paid',
                            dueDate : '12 days late',
                            amount : '59852.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Leanne Graham' ,
                            clientEmail : 'Sincere@april.biz' ,
                            invoiceId : '45rt5ytrfv' ,
                            status : 'success',
                            statusText : 'Paid',
                            dueDate : '10 days late',
                            amount : '58452.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Ervin Howell' ,
                            clientEmail : 'Shanna@melissa.tv' ,
                            invoiceId : 'drtfgv' ,
                            status : 'pending',
                            statusText : 'Pending',
                            dueDate : '12 days late',
                            amount : '556.44',
                        },
                        { 
                            id : Date().now , 
                            clientName : 'Clementine Bauch' ,
                            clientEmail : 'Nathan@yesenia.net' ,
                            invoiceId : '585444rgt' ,
                            status : 'success',
                            statusText : 'Paid',
                            dueDate : '12 days late',
                            amount : '59852.44',
                        },
                    ]   
                }
            }
        }
    },
} 
</script>


<style lang="scss" scoped>
.invoice-table {
    th,
    td {
        vertical-align: middle;
    }
}
</style>