<template>
    <div v-if="tableData" class="invoice-table table-responsive" :class="scrollable ? 'is-scrollable' : ''">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col" class="text-nowrap text-uppercase py-3" v-for="(column, index) in tableData.tableColumns" :key="index">
                        {{ column }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in tableData.tableRows" :key="row.id">
                    <td scope="row" class="py-3">
                        <p class="mb-0 client-name fw-bold">{{ row.clientName }}</p>
                        <p class="mb-0 client-email">
                            <small>{{ row.clientEmail }}</small>
                        </p>
                    </td>
                    <td class="py-3">
                        <p class="mb-0 invoice-id fw-bold">{{ row.invoiceId }}</p>
                    </td>
                    <td class="py-3">
                        <span
                            class="badge"
                            :class="row.status.toString() === 'success' ? 'bg-success' : row.status.toString() === 'pending' ? 'bg-warning' : row.status.toString() === 'cancaled' ? 'bg-danger' : ''"
                        >
                            {{ row.statusText }}
                        </span>
                    </td>
                    <td class="py-3">
                        <p class="mb-0 due-date">{{ row.dueDate }}</p>
                    </td>
                    <td class="py-3">
                        <p class="mb-0 amount fw-bold">{{ `$${row.amount}` }}</p>
                    </td>
                    <td class="py-3">
                        <button class="btn btn-action">
                            <svg width="18" height="6" viewBox="0 0 18 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.83268 2.99984C4.83268 4.15043 3.89994 5.08317 2.74935 5.08317C1.59876 5.08317 0.666016 4.15043 0.666016 2.99984C0.666016 1.84924 1.59876 0.916504 2.74935 0.916504C3.89994 0.916504 4.83268 1.84924 4.83268 2.99984Z"
                                    fill="#79828D"
                                />
                                <path
                                    d="M11.0827 2.99984C11.0827 4.15043 10.1499 5.08317 8.99935 5.08317C7.84876 5.08317 6.91602 4.15043 6.91602 2.99984C6.91602 1.84924 7.84876 0.916504 8.99935 0.916504C10.1499 0.916504 11.0827 1.84924 11.0827 2.99984Z"
                                    fill="#79828D"
                                />
                                <path
                                    d="M17.3327 2.99984C17.3327 4.15043 16.3999 5.08317 15.2493 5.08317C14.0988 5.08317 13.166 4.15043 13.166 2.99984C13.166 1.84924 14.0988 0.916504 15.2493 0.916504C16.3999 0.916504 17.3327 1.84924 17.3327 2.99984Z"
                                    fill="#79828D"
                                />
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    export default {
        name : 'InvoiceTable',
        props: {
            scrollable : Boolean,
            tableData: {
                tableColumns : ['Client' , 'Invoice Id' , 'Status' , 'Due Date' , 'Amount' , '' ],
                tableRows : [
                    { 
                        id : Date.now() , 
                        clientName : 'Brooklyn Simmons' ,
                        clientEmail : 'brooklynsimmons@gmail.com' ,
                        invoiceId : '5JGFU58' ,
                        status : 'success',
                        statusText : 'Paid',
                        dueDate : '7 days late',
                        amount : '630.44',
                    },
                ]   
            },
        },
    } 
</script>

<style lang="scss" scoped>
.invoice-table {
    --max-height: 350px;

    th,
    td {
        vertical-align: middle;
        font-size: 15px;
        color: var(--text-clr-gray);

        .fw-bold {
            font-weight: 600 !important;
        }
    }

    th {
        font-size: 14px !important;
        letter-spacing: 1px;
        color: var(--text-clr-gray);
        font-weight: 500;
    }

    .table > :not(caption) > * > * {
        border-color: #f0f0f0;
    }
}
</style>