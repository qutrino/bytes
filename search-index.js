var searchIndex = {};
searchIndex['bytes'] = {"items":[[0,"","bytes","",null,null],[4,"BufError","","",null,null],[13,"Underflow","","",0,null],[13,"Overflow","","",0,null],[0,"alloc","","",null,null],[3,"Heap","bytes::alloc","",null,null],[3,"MemRef","","",null,null],[3,"Mem","","Memory allocated by an Allocator must be prefixed with Mem",null,null],[5,"heap","","",null,{"inputs":[{"name":"usize"}],"output":{"name":"memref"}}],[11,"allocate","","",1,{"inputs":[{"name":"heap"},{"name":"usize"}],"output":{"name":"memref"}}],[11,"deallocate","","",1,null],[11,"allocate","","",1,{"inputs":[{"name":"heap"},{"name":"usize"}],"output":{"name":"memref"}}],[11,"deallocate","","",1,null],[8,"Allocator","","Allocates memory to be used by Bufs or Bytes. Allows allocating memory\nusing alternate stratgies than the default Rust heap allocator. Also does\nnot require that allocations are continuous in memory.",null,null],[10,"allocate","","Allocate memory. May or may not be contiguous.",2,{"inputs":[{"name":"allocator"},{"name":"usize"}],"output":{"name":"memref"}}],[10,"deallocate","","Deallocate a chunk of memory",2,null],[11,"new","","",3,null],[11,"none","","",3,{"inputs":[{"name":"memref"}],"output":{"name":"memref"}}],[11,"is_none","","",3,{"inputs":[{"name":"memref"}],"output":{"name":"bool"}}],[11,"ptr","","",3,null],[11,"bytes","","",3,null],[11,"bytes_mut","","",3,null],[11,"clone","","",3,{"inputs":[{"name":"memref"}],"output":{"name":"memref"}}],[11,"drop","","",3,{"inputs":[{"name":"memref"}],"output":null}],[11,"new","","",4,null],[0,"buf","bytes","",null,null],[3,"ByteBuf","bytes::buf","A `Buf` backed by a contiguous region of memory.",null,null],[3,"MutByteBuf","","",null,null],[3,"ROByteBuf","","Same as `ByteBuf` but cannot be flipped to a `MutByteBuf`.",null,null],[3,"RingBuf","","Buf backed by a continous chunk of memory. Maintains a read cursor and a\nwrite cursor. When reads and writes reach the end of the allocated buffer,\nwraps around to the start.",null,null],[3,"SliceBuf","","",null,null],[3,"MutSliceBuf","","",null,null],[3,"Take","","",null,null],[11,"from_slice","","Create a new `ByteBuf` by copying the contents of the given slice.",5,null],[11,"mut_with_capacity","","",5,{"inputs":[{"name":"bytebuf"},{"name":"usize"}],"output":{"name":"mutbytebuf"}}],[11,"none","","",5,{"inputs":[{"name":"bytebuf"}],"output":{"name":"bytebuf"}}],[11,"from_mem_ref","","",5,{"inputs":[{"name":"bytebuf"},{"name":"memref"},{"name":"u32"},{"name":"u32"},{"name":"u32"}],"output":{"name":"bytebuf"}}],[11,"capacity","","",5,{"inputs":[{"name":"bytebuf"}],"output":{"name":"usize"}}],[11,"flip","","",5,{"inputs":[{"name":"bytebuf"}],"output":{"name":"mutbytebuf"}}],[11,"resume","","Flips the buffer back to mutable, resetting the write position\nto the byte after the previous write.",5,{"inputs":[{"name":"bytebuf"}],"output":{"name":"mutbytebuf"}}],[11,"read_slice","","",5,null],[11,"to_seq_byte_str","","",5,{"inputs":[{"name":"bytebuf"}],"output":{"name":"seqbytestr"}}],[11,"to_bytes","","",5,{"inputs":[{"name":"bytebuf"}],"output":{"name":"bytes"}}],[11,"mark","","Marks the current read location.",5,{"inputs":[{"name":"bytebuf"}],"output":null}],[11,"reset","","Resets the read position to the previously marked position.",5,{"inputs":[{"name":"bytebuf"}],"output":null}],[11,"remaining","","",5,{"inputs":[{"name":"bytebuf"}],"output":{"name":"usize"}}],[11,"bytes","","",5,null],[11,"advance","","",5,{"inputs":[{"name":"bytebuf"},{"name":"usize"}],"output":null}],[11,"read_slice","","",5,null],[11,"fmt","","",5,{"inputs":[{"name":"bytebuf"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_mem_ref","","",6,{"inputs":[{"name":"robytebuf"},{"name":"memref"},{"name":"u32"},{"name":"u32"},{"name":"u32"}],"output":{"name":"robytebuf"}}],[11,"to_seq_byte_str","","",6,{"inputs":[{"name":"robytebuf"}],"output":{"name":"seqbytestr"}}],[11,"to_bytes","","",6,{"inputs":[{"name":"robytebuf"}],"output":{"name":"bytes"}}],[11,"mark","","Marks the current read location.",6,{"inputs":[{"name":"robytebuf"}],"output":null}],[11,"reset","","Resets the read position to the previously marked position.",6,{"inputs":[{"name":"robytebuf"}],"output":null}],[11,"remaining","","",6,{"inputs":[{"name":"robytebuf"}],"output":{"name":"usize"}}],[11,"bytes","","",6,null],[11,"advance","","",6,{"inputs":[{"name":"robytebuf"},{"name":"usize"}],"output":null}],[11,"read_slice","","",6,null],[11,"fmt","","",6,{"inputs":[{"name":"robytebuf"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"capacity","","",7,{"inputs":[{"name":"mutbytebuf"}],"output":{"name":"usize"}}],[11,"flip","","",7,{"inputs":[{"name":"mutbytebuf"}],"output":{"name":"bytebuf"}}],[11,"clear","","",7,{"inputs":[{"name":"mutbytebuf"}],"output":null}],[11,"write_slice","","",7,null],[11,"bytes","","",7,null],[11,"remaining","","",7,{"inputs":[{"name":"mutbytebuf"}],"output":{"name":"usize"}}],[11,"advance","","",7,{"inputs":[{"name":"mutbytebuf"},{"name":"usize"}],"output":null}],[11,"mut_bytes","","",7,null],[11,"fmt","","",7,{"inputs":[{"name":"mutbytebuf"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Allocates a new `RingBuf` with the specified capacity.",8,{"inputs":[{"name":"ringbuf"},{"name":"usize"}],"output":{"name":"ringbuf"}}],[11,"is_full","","Returns `true` if the buf cannot accept any further writes.",8,{"inputs":[{"name":"ringbuf"}],"output":{"name":"bool"}}],[11,"is_empty","","Returns `true` if the buf cannot accept any further reads.",8,{"inputs":[{"name":"ringbuf"}],"output":{"name":"bool"}}],[11,"capacity","","Returns the number of bytes that the buf can hold.",8,{"inputs":[{"name":"ringbuf"}],"output":{"name":"usize"}}],[11,"mark","","Marks the current read location.",8,{"inputs":[{"name":"ringbuf"}],"output":null}],[11,"reset","","Resets the read position to the previously marked position.",8,{"inputs":[{"name":"ringbuf"}],"output":null}],[11,"clear","","Resets all internal state to the initial state.",8,{"inputs":[{"name":"ringbuf"}],"output":null}],[11,"clone","","",8,{"inputs":[{"name":"ringbuf"}],"output":{"name":"ringbuf"}}],[11,"fmt","","",8,{"inputs":[{"name":"ringbuf"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"remaining","","",8,{"inputs":[{"name":"ringbuf"}],"output":{"name":"usize"}}],[11,"bytes","","",8,null],[11,"advance","","",8,{"inputs":[{"name":"ringbuf"},{"name":"usize"}],"output":null}],[11,"remaining","","",8,{"inputs":[{"name":"ringbuf"}],"output":{"name":"usize"}}],[11,"advance","","",8,{"inputs":[{"name":"ringbuf"},{"name":"usize"}],"output":null}],[11,"mut_bytes","","",8,null],[11,"read","","",8,null],[11,"write","","",8,null],[11,"flush","","",8,{"inputs":[{"name":"ringbuf"}],"output":{"name":"result"}}],[11,"wrap","","",9,null],[11,"remaining","","",9,{"inputs":[{"name":"slicebuf"}],"output":{"name":"usize"}}],[11,"bytes","","",9,null],[11,"advance","","",9,{"inputs":[{"name":"slicebuf"},{"name":"usize"}],"output":null}],[11,"wrap","","",10,null],[11,"remaining","","",10,{"inputs":[{"name":"mutslicebuf"}],"output":{"name":"usize"}}],[11,"advance","","",10,{"inputs":[{"name":"mutslicebuf"},{"name":"usize"}],"output":null}],[11,"mut_bytes","","",10,null],[11,"fmt","","",11,{"inputs":[{"name":"take"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",11,{"inputs":[{"name":"take"},{"name":"t"},{"name":"usize"}],"output":{"name":"take"}}],[11,"into_inner","","",11,{"inputs":[{"name":"take"}],"output":{"name":"t"}}],[11,"get_ref","","",11,{"inputs":[{"name":"take"}],"output":{"name":"t"}}],[11,"get_mut","","",11,{"inputs":[{"name":"take"}],"output":{"name":"t"}}],[11,"limit","","",11,{"inputs":[{"name":"take"}],"output":{"name":"usize"}}],[11,"set_limit","","",11,{"inputs":[{"name":"take"},{"name":"usize"}],"output":null}],[11,"remaining","","",11,{"inputs":[{"name":"take"}],"output":{"name":"usize"}}],[11,"bytes","","",11,null],[11,"advance","","",11,{"inputs":[{"name":"take"},{"name":"usize"}],"output":null}],[11,"read","","",11,null],[11,"remaining","","",11,{"inputs":[{"name":"take"}],"output":{"name":"usize"}}],[11,"mut_bytes","","",11,null],[11,"advance","","",11,{"inputs":[{"name":"take"},{"name":"usize"}],"output":null}],[8,"Buf","","A trait for values that provide sequential read access to bytes.",null,null],[10,"remaining","","Returns the number of bytes that can be accessed from the Buf",12,{"inputs":[{"name":"buf"}],"output":{"name":"usize"}}],[10,"bytes","","Returns a slice starting at the current Buf position and of length\nbetween 0 and `Buf::remaining()`.",12,null],[10,"advance","","Advance the internal cursor of the Buf",12,{"inputs":[{"name":"buf"},{"name":"usize"}],"output":null}],[11,"has_remaining","","Returns true if there are any more bytes to consume",12,{"inputs":[{"name":"buf"}],"output":{"name":"bool"}}],[11,"read_slice","","Read bytes from the `Buf` into the given slice and advance the cursor by\nthe number of bytes read.\nReturns the number of bytes read.",12,null],[11,"read_byte","","Read a single byte from the `Buf`",12,{"inputs":[{"name":"buf"}],"output":{"name":"option"}}],[8,"BufExt","","An extension trait providing extra functions applicable to all `Buf` values.",null,null],[10,"read","","Read bytes from this Buf into the given sink and advance the cursor by\nthe number of bytes read.",13,{"inputs":[{"name":"bufext"},{"name":"s"}],"output":{"name":"result"}}],[8,"MutBuf","","A trait for values that provide sequential write access to bytes.",null,null],[10,"remaining","","Returns the number of bytes that can be written to the MutBuf",14,{"inputs":[{"name":"mutbuf"}],"output":{"name":"usize"}}],[10,"advance","","Advance the internal cursor of the MutBuf",14,{"inputs":[{"name":"mutbuf"},{"name":"usize"}],"output":null}],[11,"has_remaining","","Returns true iff there is any more space for bytes to be written",14,{"inputs":[{"name":"mutbuf"}],"output":{"name":"bool"}}],[10,"mut_bytes","","Returns a mutable slice starting at the current MutBuf position and of\nlength between 0 and `MutBuf::remaining()`.",14,null],[11,"write_slice","","Write bytes from the given slice into the `MutBuf` and advance the\ncursor by the number of bytes written.\nReturns the number of bytes written.",14,null],[11,"write_byte","","Write a single byte to the `MuBuf`",14,{"inputs":[{"name":"mutbuf"},{"name":"u8"}],"output":{"name":"bool"}}],[8,"MutBufExt","","An extension trait providing extra functions applicable to all `MutBuf` values.",null,null],[10,"write","","Write bytes from the given source into the current `MutBuf` and advance\nthe cursor by the number of bytes written.",15,{"inputs":[{"name":"mutbufext"},{"name":"s"}],"output":{"name":"result"}}],[8,"Sink","","A value that reads bytes from a Buf into itself",null,null],[16,"Error","","",16,null],[10,"sink","","",16,{"inputs":[{"name":"sink"},{"name":"b"}],"output":{"name":"result"}}],[8,"Source","","A value that writes bytes from itself into a `MutBuf`.",null,null],[16,"Error","","",17,null],[10,"fill","","",17,{"inputs":[{"name":"source"},{"name":"b"}],"output":{"name":"result"}}],[11,"remaining","alloc::boxed","",18,{"inputs":[{"name":"box"}],"output":{"name":"usize"}}],[11,"bytes","","",18,null],[11,"advance","","",18,{"inputs":[{"name":"box"},{"name":"usize"}],"output":null}],[11,"read_slice","","",18,null],[11,"fmt","","",18,{"inputs":[{"name":"box"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"remaining","std::io::cursor","",19,{"inputs":[{"name":"cursor"}],"output":{"name":"usize"}}],[11,"bytes","","",19,null],[11,"advance","","",19,{"inputs":[{"name":"cursor"},{"name":"usize"}],"output":null}],[11,"remaining","collections::vec","",20,{"inputs":[{"name":"vec"}],"output":{"name":"usize"}}],[11,"advance","","",20,{"inputs":[{"name":"vec"},{"name":"usize"}],"output":null}],[11,"mut_bytes","","",20,null],[11,"remaining","std::io::cursor","",19,{"inputs":[{"name":"cursor"}],"output":{"name":"usize"}}],[11,"bytes","","",19,null],[11,"advance","","",19,{"inputs":[{"name":"cursor"},{"name":"usize"}],"output":null}],[11,"read","bytes::buf","",5,null],[11,"read","","",6,null],[11,"read","alloc::boxed","",18,null],[11,"write","bytes::buf","",7,null],[11,"flush","","",7,{"inputs":[{"name":"mutbytebuf"}],"output":{"name":"result"}}],[0,"str","bytes","",null,null],[3,"Bytes","bytes::str","A specialized `ByteStr` box.",null,null],[3,"Rope","","An immutable sequence of bytes formed by concatenation of other `ByteStr`\nvalues, without copying the data in the pieces. The concatenation is\nrepresented as a tree whose leaf nodes are each a `Bytes` value.",null,null],[3,"RopeBuf","","",null,null],[3,"SeqByteStr","","",null,null],[3,"SmallByteStr","","",null,null],[3,"SmallByteStrBuf","","",null,null],[11,"from_slice","","",21,null],[11,"of","","",21,{"inputs":[{"name":"bytes"},{"name":"b"}],"output":{"name":"bytes"}}],[11,"empty","","",21,{"inputs":[{"name":"bytes"}],"output":{"name":"bytes"}}],[11,"downcast_ref","","If the underlying `ByteStr` is of type `B`, returns a reference to it\notherwise None.",21,{"inputs":[{"name":"bytes"}],"output":{"name":"option"}}],[11,"try_unwrap","","If the underlying `ByteStr` is of type `B`, returns the unwraped value,\notherwise, returns the original `Bytes` as `Err`.",21,{"inputs":[{"name":"bytes"}],"output":{"name":"result"}}],[11,"buf","","",21,{"inputs":[{"name":"bytes"}],"output":{"name":"box"}}],[11,"concat","","",21,{"inputs":[{"name":"bytes"},{"name":"b"}],"output":{"name":"bytes"}}],[11,"len","","",21,{"inputs":[{"name":"bytes"}],"output":{"name":"usize"}}],[11,"slice","","",21,{"inputs":[{"name":"bytes"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bytes"}}],[11,"split_at","","",21,null],[11,"to_bytes","","",21,{"inputs":[{"name":"bytes"}],"output":{"name":"bytes"}}],[11,"index","","",21,{"inputs":[{"name":"bytes"},{"name":"usize"}],"output":{"name":"u8"}}],[11,"fmt","","",21,{"inputs":[{"name":"bytes"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",21,{"inputs":[{"name":"bytes"}],"output":{"name":"bytes"}}],[11,"drop","","",21,{"inputs":[{"name":"bytes"}],"output":null}],[11,"from_slice","","",22,null],[11,"of","","Returns a Rope consisting of the supplied Bytes as a single segment.",22,{"inputs":[{"name":"rope"},{"name":"b"}],"output":{"name":"rope"}}],[11,"len","","",22,{"inputs":[{"name":"rope"}],"output":{"name":"usize"}}],[11,"is_empty","","",22,{"inputs":[{"name":"rope"}],"output":{"name":"bool"}}],[11,"buf","","",22,{"inputs":[{"name":"rope"}],"output":{"name":"ropebuf"}}],[11,"concat","","",22,{"inputs":[{"name":"rope"},{"name":"b"}],"output":{"name":"bytes"}}],[11,"len","","",22,{"inputs":[{"name":"rope"}],"output":{"name":"usize"}}],[11,"slice","","",22,{"inputs":[{"name":"rope"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bytes"}}],[11,"to_bytes","","",22,{"inputs":[{"name":"rope"}],"output":{"name":"bytes"}}],[11,"index","","",22,{"inputs":[{"name":"rope"},{"name":"usize"}],"output":{"name":"u8"}}],[11,"clone","","",22,{"inputs":[{"name":"rope"}],"output":{"name":"rope"}}],[11,"remaining","","",23,{"inputs":[{"name":"ropebuf"}],"output":{"name":"usize"}}],[11,"bytes","","",23,null],[11,"advance","","",23,{"inputs":[{"name":"ropebuf"},{"name":"usize"}],"output":null}],[11,"from_slice","","Create a new `SeqByteStr` from a byte slice.",24,null],[11,"from_mem_ref","","Creates a new `SeqByteStr` from a `MemRef`, an offset, and a length.",24,{"inputs":[{"name":"seqbytestr"},{"name":"memref"},{"name":"u32"},{"name":"u32"}],"output":{"name":"seqbytestr"}}],[11,"buf","","",24,{"inputs":[{"name":"seqbytestr"}],"output":{"name":"robytebuf"}}],[11,"concat","","",24,{"inputs":[{"name":"seqbytestr"},{"name":"b"}],"output":{"name":"bytes"}}],[11,"len","","",24,{"inputs":[{"name":"seqbytestr"}],"output":{"name":"usize"}}],[11,"slice","","",24,{"inputs":[{"name":"seqbytestr"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bytes"}}],[11,"to_bytes","","",24,{"inputs":[{"name":"seqbytestr"}],"output":{"name":"bytes"}}],[11,"index","","",24,{"inputs":[{"name":"seqbytestr"},{"name":"usize"}],"output":{"name":"u8"}}],[11,"clone","","",24,{"inputs":[{"name":"seqbytestr"}],"output":{"name":"seqbytestr"}}],[11,"clone","","",25,{"inputs":[{"name":"smallbytestr"}],"output":{"name":"smallbytestr"}}],[11,"zero","","",25,{"inputs":[{"name":"smallbytestr"}],"output":{"name":"smallbytestr"}}],[11,"from_slice","","",25,null],[11,"as_slice","","",25,null],[11,"buf","","",25,{"inputs":[{"name":"smallbytestr"}],"output":{"name":"smallbytestrbuf"}}],[11,"concat","","",25,{"inputs":[{"name":"smallbytestr"},{"name":"b"}],"output":{"name":"bytes"}}],[11,"len","","",25,{"inputs":[{"name":"smallbytestr"}],"output":{"name":"usize"}}],[11,"slice","","",25,{"inputs":[{"name":"smallbytestr"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bytes"}}],[11,"to_bytes","","",25,{"inputs":[{"name":"smallbytestr"}],"output":{"name":"bytes"}}],[11,"index","","",25,{"inputs":[{"name":"smallbytestr"},{"name":"usize"}],"output":{"name":"u8"}}],[11,"clone","","",26,{"inputs":[{"name":"smallbytestrbuf"}],"output":{"name":"smallbytestrbuf"}}],[11,"remaining","","",26,{"inputs":[{"name":"smallbytestrbuf"}],"output":{"name":"usize"}}],[11,"bytes","","",26,null],[11,"advance","","",26,{"inputs":[{"name":"smallbytestrbuf"},{"name":"usize"}],"output":null}],[8,"ByteStr","","An immutable sequence of bytes. Operations will not mutate the original\nvalue. Since only immutable access is permitted, operations do not require\ncopying (though, sometimes copying will happen as an optimization).",null,null],[16,"Buf","","",27,null],[10,"buf","","Returns a read-only `Buf` for accessing the byte contents of the\n`ByteStr`.",27,{"inputs":[{"name":"bytestr"}],"output":{"name":"buf"}}],[10,"concat","","Returns a new `Bytes` value representing the concatenation of `self`\nwith the given `Bytes`.",27,{"inputs":[{"name":"bytestr"},{"name":"b"}],"output":{"name":"bytes"}}],[10,"len","","Returns the number of bytes in the ByteStr",27,{"inputs":[{"name":"bytestr"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the length of the `ByteStr` is 0",27,{"inputs":[{"name":"bytestr"}],"output":{"name":"bool"}}],[10,"slice","","Returns a new ByteStr value containing the byte range between `begin`\n(inclusive) and `end` (exclusive)",27,{"inputs":[{"name":"bytestr"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bytes"}}],[11,"slice_from","","Returns a new ByteStr value containing the byte range starting from\n`begin` (inclusive) to the end of the byte str.",27,{"inputs":[{"name":"bytestr"},{"name":"usize"}],"output":{"name":"bytes"}}],[11,"slice_to","","Returns a new ByteStr value containing the byte range from the start up\nto `end` (exclusive).",27,{"inputs":[{"name":"bytestr"},{"name":"usize"}],"output":{"name":"bytes"}}],[11,"split_at","","Divides the value into two `Bytes` at the given index.",27,null],[8,"ToBytes","","",null,null],[10,"to_bytes","","Consumes the value and returns a `Bytes` instance containing\nidentical bytes",28,{"inputs":[{"name":"tobytes"}],"output":{"name":"bytes"}}],[11,"eq","","",24,{"inputs":[{"name":"seqbytestr"},{"name":"b"}],"output":{"name":"bool"}}],[11,"ne","","",24,{"inputs":[{"name":"seqbytestr"},{"name":"b"}],"output":{"name":"bool"}}],[11,"eq","","",25,{"inputs":[{"name":"smallbytestr"},{"name":"b"}],"output":{"name":"bool"}}],[11,"ne","","",25,{"inputs":[{"name":"smallbytestr"},{"name":"b"}],"output":{"name":"bool"}}],[11,"eq","","",21,{"inputs":[{"name":"bytes"},{"name":"b"}],"output":{"name":"bool"}}],[11,"ne","","",21,{"inputs":[{"name":"bytes"},{"name":"b"}],"output":{"name":"bool"}}],[11,"eq","","",22,{"inputs":[{"name":"rope"},{"name":"b"}],"output":{"name":"bool"}}],[11,"ne","","",22,{"inputs":[{"name":"rope"},{"name":"b"}],"output":{"name":"bool"}}],[0,"traits","bytes","All traits are re-exported here to allow glob imports.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"buferror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"buferror"}],"output":{"name":"buferror"}}],[11,"read","bytes::str","",23,null]],"paths":[[4,"BufError"],[3,"Heap"],[8,"Allocator"],[3,"MemRef"],[3,"Mem"],[3,"ByteBuf"],[3,"ROByteBuf"],[3,"MutByteBuf"],[3,"RingBuf"],[3,"SliceBuf"],[3,"MutSliceBuf"],[3,"Take"],[8,"Buf"],[8,"BufExt"],[8,"MutBuf"],[8,"MutBufExt"],[8,"Sink"],[8,"Source"],[3,"Box"],[3,"Cursor"],[3,"Vec"],[3,"Bytes"],[3,"Rope"],[3,"RopeBuf"],[3,"SeqByteStr"],[3,"SmallByteStr"],[3,"SmallByteStrBuf"],[8,"ByteStr"],[8,"ToBytes"]]};
initSearch(searchIndex);
