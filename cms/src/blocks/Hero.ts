import { Block } from 'payload';

export const Hero: Block = {
    slug: "Hero",
    labels: {singular: "Hero", plural: "Hero"},
    fields = [
        {name: 'anchor', type: 'text', label: 'ID секції'}
    ]
}