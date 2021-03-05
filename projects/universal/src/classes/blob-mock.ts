export class BlobMock implements Blob {
    size = 0;
    type = '';
    slice = () => this;
}
